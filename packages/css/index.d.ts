export interface ListAllOptions {
  /**
   * Path to the folder containing the `css.json` file to read from. Defaults to
   * the path of the `@webref/css` package itself. This option mainly exists for
   * tests and other advanced workflows that need to point the package at a
   * different copy of the data.
   *
   * @default {__dirname}
   */
  folder?: string | undefined;
}

/**
 * Shared metadata for CSS features exposed by the consolidated `css.json` file.
 */
export interface CssFeatureDefinition {
  /**
   * The canonical feature name as it appears in the source specification.
   * Examples include property names, at-rule names, selector names, and
   * function/type notations.
   */
  readonly name: string;
  /**
   * Absolute URL to the primary specification definition of the feature.
   */
  readonly href: string;
  /**
   * Absolute URLs to specifications that extend the base definition.
   * For most feature kinds this is usually an empty array.
   */
  readonly extended: string[];
  /**
   * Optional prose excerpt captured near the definition in the specification.
   * This field is mainly intended for debugging and human inspection.
   */
  readonly prose?: string | undefined;
  /**
   * Formal syntax for the feature when the specification exposes one.
   */
  readonly syntax?: string | undefined;
}

/**
 * Base shape for CSS feature definitions that may be scoped to another feature.
 */
export interface ScopedCssFeatureDefinition extends CssFeatureDefinition {
  /**
   * Names of the CSS features that scope this definition.
   * For example, a function may only be valid for a given property, or an
   * at-rule may only be valid when nested under another at-rule.
   */
  readonly for?: string[] | undefined;
}

/**
 * Descriptor definition attached to a consolidated CSS at-rule entry.
 */
export interface CssAtRuleDescriptorDefinition {
  /**
   * Descriptor name, as defined in the source specification.
   */
  readonly name: string;
  /**
   * Absolute URL to the descriptor definition in the specification.
   */
  readonly href: string;
  /**
   * Name of the at-rule this descriptor belongs to.
   * @example "@font-face"
   */
  readonly for: string;
  /**
   * Descriptor initial value when exposed by the specification.
   */
  readonly initial?: string | undefined;
  /**
   * Descriptor syntax when exposed by the specification.
   */
  readonly syntax?: string | undefined;
  /**
   * Descriptor type metadata, typically used for media or container features.
   */
  readonly type?: string | undefined;
  /**
   * Computed value metadata when present in the source specification.
   */
  readonly computedValue?: string | undefined;
}

/**
 * Consolidated definition for a CSS at-rule.
 */
export interface CssAtRuleDefinition extends ScopedCssFeatureDefinition {
  /**
   * Descriptors defined for the at-rule.
   */
  readonly descriptors: CssAtRuleDescriptorDefinition[];
}

/**
 * Indexed variant of a CSS at-rule definition returned by {@linkcode index} and
 * {@linkcode indexSync}. The descriptor array is replaced with an object keyed
 * by descriptor name for direct lookups.
 */
export interface IndexedCssAtRuleDefinition
  extends Omit<CssAtRuleDefinition, "descriptors"> {
  /**
   * Descriptors indexed by descriptor name.
   */
  readonly descriptors: Record<string, CssAtRuleDescriptorDefinition>;
}

/**
 * Consolidated definition for a CSS function.
 */
export interface CssFunctionDefinition extends ScopedCssFeatureDefinition {}

/**
 * Consolidated definition for a CSS selector.
 */
export interface CssSelectorDefinition extends CssFeatureDefinition {}

/**
 * Consolidated definition for a CSS type.
 */
export interface CssTypeDefinition extends ScopedCssFeatureDefinition {}

/**
 * Consolidated definition for a CSS property.
 */
export interface CssPropertyDefinition extends CssFeatureDefinition {
  /**
   * Whether and how the property is animatable, copied from the source
   * specification when available.
   */
  readonly animatable?: string | undefined;
  /**
   * Additional animation metadata surfaced by some specifications.
   */
  readonly animatableType?: string | undefined;
  /**
   * Animation type metadata for the property.
   */
  readonly animationType?: string | undefined;
  /**
   * "Applies to" metadata from the property definition table.
   */
  readonly appliesTo?: string | undefined;
  /**
   * Canonical order metadata from the property definition table.
   */
  readonly canonicalOrder?: string | undefined;
  /**
   * Computed value metadata from the property definition table.
   */
  readonly computedValue?: string | undefined;
  /**
   * Legacy raw key copied from some sources where the field name includes a
   * non-breaking space.
   */
  readonly "computed\u00A0value"?: string | undefined;
  /**
   * Whether the property is inherited, as reported by the source spec.
   */
  readonly inherited?: string | undefined;
  /**
   * Initial value metadata from the property definition table.
   */
  readonly initial?: string | undefined;
  /**
   * Name of the canonical property when this entry is a legacy alias.
   */
  readonly legacyAliasOf?: string | undefined;
  /**
   * Logical property group metadata when exposed by the source spec.
   */
  readonly logicalPropertyGroup?: string | undefined;
  /**
   * Longhand properties set by this shorthand, in specification order.
   */
  readonly longhands?: string[] | undefined;
  /**
   * Media group metadata from the property definition table.
   */
  readonly media?: string | undefined;
  /**
   * Percentage resolution metadata from the property definition table.
   */
  readonly percentages?: string | undefined;
  /**
   * Reset-only longhands for shorthand properties, in specification order.
   */
  readonly resetLonghands?: string[] | undefined;
  /**
   * CSSOM attribute names generated for this property.
   */
  readonly styleDeclaration: string[];
  /**
   * Used value metadata when exposed by the source specification.
   */
  readonly usedValue?: string | undefined;
}

/**
 * Shape of the consolidated CSS data returned by {@linkcode listAll} and
 * {@linkcode listAllSync}.
 */
export interface CssDefinitions {
  /**
   * All known CSS at-rules.
   */
  readonly atrules: CssAtRuleDefinition[];
  /**
   * All known CSS functions.
   */
  readonly functions: CssFunctionDefinition[];
  /**
   * All known CSS properties.
   */
  readonly properties: CssPropertyDefinition[];
  /**
   * All known CSS selectors.
   */
  readonly selectors: CssSelectorDefinition[];
  /**
   * All known CSS non-terminal types.
   */
  readonly types: CssTypeDefinition[];
}

/**
 * Shape of the indexed CSS data returned by {@linkcode index} and
 * {@linkcode indexSync}.
 */
export interface IndexedCssDefinitions {
  /**
   * At-rules indexed by feature name, or by a disambiguated
   * `<name> for <scope>` key when needed.
   */
  readonly atrules: Record<string, IndexedCssAtRuleDefinition>;
  /**
   * Functions indexed by feature name, or by a disambiguated
   * `<name> for <scope>` key when needed.
   */
  readonly functions: Record<string, CssFunctionDefinition>;
  /**
   * Properties indexed by property name.
   */
  readonly properties: Record<string, CssPropertyDefinition>;
  /**
   * Selectors indexed by selector name.
   */
  readonly selectors: Record<string, CssSelectorDefinition>;
  /**
   * Types indexed by feature name, or by a disambiguated
   * `<name> for <scope>` key when needed.
   */
  readonly types: Record<string, CssTypeDefinition>;
}

/**
 * Reads and parses the consolidated `css.json` file from the `@webref/css`
 * package.
 *
 * @param [options] Optional configuration for loading the JSON file.
 * @returns a Promise that resolves to the consolidated CSS definitions.
 * @see {@linkcode listAllSync} for the synchronous version of this API.
 */
export function listAll(options?: ListAllOptions): Promise<CssDefinitions>;

/**
 * Synchronously reads and parses the consolidated `css.json` file from the
 * `@webref/css` package.
 *
 * @param [options] Optional configuration for loading the JSON file.
 * @returns the consolidated CSS definitions.
 * @see {@linkcode listAll} for the asynchronous version of this API.
 */
export function listAllSync(options?: ListAllOptions): CssDefinitions;

/**
 * Builds an object view of the consolidated CSS definitions keyed by feature
 * name for easier direct lookups.
 *
 * @param [options] Optional configuration for loading the JSON file.
 * @returns a Promise that resolves to the indexed CSS definitions.
 * @see {@linkcode indexSync} for the synchronous version of this API.
 */
export function index(options?: ListAllOptions): Promise<IndexedCssDefinitions>;

/**
 * Synchronously builds an object view of the consolidated CSS definitions keyed
 * by feature name for easier direct lookups.
 *
 * @param [options] Optional configuration for loading the JSON file.
 * @returns the indexed CSS definitions.
 * @see {@linkcode index} for the asynchronous version of this API.
 */
export function indexSync(options?: ListAllOptions): IndexedCssDefinitions;

declare const _default: {
  listAll: typeof listAll;
  listAllSync: typeof listAllSync;
  index: typeof index;
  indexSync: typeof indexSync;
};

export default _default;
