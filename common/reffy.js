window.onload = function () {
  const $ = (el, selector) =>
    Array.prototype.slice.call(el.querySelectorAll(selector), 0);

  const toggleSubSections = spec =>
    $(spec, 'h3 ~ section').forEach(
      section => section.hasAttribute('hidden') ?
        section.removeAttribute('hidden') :
        section.setAttribute('hidden', '')
    );

  // Collapse spec sections by default
  let total = 0;
  let totalOk = 0;
  let totalError = 0;
  let totalWarning = 0;
  $(document, 'section[data-spec]').forEach(spec => {
    total += 1;
    const title = spec.querySelector('h3');

    // Compute the set of anomaly icons to display
    let flags = [];
    if (spec.hasAttribute('data-ok')) {
      flags.push('<i class="fa fa-check fa-lg ok" ' +
        'title="Spec looks good"></i>');
      totalOk += 1;
    }
    else if (spec.hasAttribute('data-error')) {
      flags.push('<i class="fa fa-exclamation-triangle fa-lg error" ' +
        'title="Spec could not be parsed"></i>');
      totalError += 1;
    }
    else {
      if (spec.hasAttribute('data-noNormativeRefs')) {
        flags.push('<span class="fa-stack" ' +
          'title="No normative references found in the spec">' +
          '<i class="fa fa-list fa-stack-1x"></i>' +
          '<i class="fa fa-ban fa-stack-2x warn"></i>' +
          '</span>');
      }
      if (spec.hasAttribute('data-hasInvalidIdl') ||
        spec.hasAttribute('data-hasObsoleteIdl')) {
        flags.push('<i class="fa fa-bug fa-lg error" ' +
          'title="Invalid or obsolete IDL content found"></i>');
      }
      if (spec.hasAttribute('data-unknownIdlNames') ||
        spec.hasAttribute('data-redefinedIdlNames')) {
        flags.push('<i class="fa fa-code fa-lg warn" ' +
          'title="Spec uses unknown IDL terms or re-defines terms defined elsewhere"></i>');
      }
      if (spec.hasAttribute('data-noRefToWebIDL') ||
        spec.hasAttribute('data-missingWebIdlRef') ||
        spec.hasAttribute('data-missingLinkRef') ||
        spec.hasAttribute('data-noEdDraft')) {
        flags.push('<i class="fa fa-chain-broken fa-lg error" ' +
          'title="Some references are missing"></i>');
      }
      if (spec.hasAttribute('data-inconsistentRef')) {
        flags.push('<i class="fa fa-link fa-lg warn" ' +
        'title="References exist but used inconsistently"></i>');
      }
      totalWarning += 1;
    }

    // Update the spec title
    title.innerHTML = '<a aria-expanded="false" aria-haspopup="true" href="#" class="pure-g">' +
      '<div class="pure-u-sm-4-5 pure-u-lg-2-3 pure-u-xl-3-5">' +
      '<i class="fa fa-caret-right"></i> ' +
      '<span>' + title.innerHTML + '</span>' +
      '</div> ' +
      '<div class="pure-u-sm-1-5 pure-u-lg-1-3 pure-u-xl-2-5">' +
      flags.join(' ') +
      '</div></a>';

    // Collapse the section by default
    toggleSubSections(spec);

    // Expand/Collapse the section on click
    const link = spec.querySelector('h3 a');
    link.onclick = () => {
      toggleSubSections(spec);
      const caret = title.querySelector('i');
      if (link.getAttribute('aria-expanded') === 'false') {
        link.setAttribute('aria-expanded', 'true');
        caret.setAttribute('class', 'fa fa-caret-down');
        window.history.pushState({}, '', '#' + spec.getAttribute('id'));
      }
      else {
        link.setAttribute('aria-expanded', 'false');
        caret.setAttribute('class', 'fa fa-caret-right');
      }
      return false;
    };
  });

  // Render summary bar
  // (making sure narrow columns remain wide enough on narrow screens)
  const barOk = document.getElementById('barOk');
  const barWarning = document.getElementById('barWarning');
  const barError = document.getElementById('barError');
  barOk.innerHTML = totalOk;
  barOk.title = `Correct specs: ${totalOk}`;
  if (totalOk === 0) {
    barOk.style.display = 'none';
  }
  else {
    barOk.style.flex = (totalOk < 10) ?
      `${totalOk} 0 1em` :
      `${totalOk} ${totalOk} auto`;
  }
  barWarning.innerHTML = totalWarning;
  barWarning.title = `Specs with warnings: ${totalWarning}`;
  if (totalWarning === 0) {
    barWarning.style.display = 'none';
  }
  else {
    barWarning.style.flex = (totalWarning < 10) ?
      `${totalWarning} 0 1em` :
      `${totalWarning} ${totalWarning} auto`;
  }
  barError.innerHTML = totalError;
  barError.title = `Specs for which analysis failed: ${totalError}`;
  if (totalError === 0) {
    barError.style.display = 'none';
  }
  else {
    barError.style.flex = (totalError < 10) ?
      `${totalError} 0 1em` :
      `${totalError} ${totalError} auto`;
  }
  document.getElementById('summary').style.display = 'flex';

  // Display the number of specifications in the report
  document.getElementById('stats').innerHTML = 'This report contains ' +
    '<strong>' + total + '</strong> specifications.';

  // Bind to spec filter
  document.getElementById('submit').onclick = () => {
    const filter = document.getElementById('filter').value;
    let count = 0;
    $(document, 'section[data-spec]').forEach(spec => {
      const hide = (filter !== 'all') &&
        !filter.split('|').find(anomaly => spec.hasAttribute('data-' + anomaly));
      if (hide) {
        spec.setAttribute('hidden', '');
      }
      else {
        count += 1;
        spec.removeAttribute('hidden');
      }
    });
    if (filter === 'all') {
      document.getElementById('stats').innerHTML = 'This report contains ' +
        '<strong>' + total + '</strong> specifications.';
    }
    else {
      document.getElementById('stats').innerHTML = 'This report contains ' +
        '<strong>' + total + '</strong> specifications. ' +
        '<strong>' + count + '</strong> specification' +
        ((count > 1) ? 's match' : ' matches') +
        ' the selected filter.';
    }
    return false;
  };

  // Force browser to re-scroll to requested position
  if (document.location.hash) {
    const spec = document.getElementById(document.location.hash.substring(1));
    spec.querySelector('h3 a').click();
    setTimeout(() => spec.scrollIntoView(), 0);
  }
};
