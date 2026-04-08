export interface ListAllOptions {
  /**
   * Path to the folder that contains the per-spec JSON extracts to read from.
   * Defaults to the path of the `@webref/css6` package itself.
   *
   * @default {__dirname}
   */
  folder?: string | undefined;
}

/**
 * Metadata about the specification a raw CSS extract comes from.
 */
export interface SpecificationDefinition {
  /**
   * Human-readable specification title.
   */
  readonly title: string;
  /**
   * Canonical URL for the specification extract.
   */
  readonly url: string;
}

/**
 * Shared recursive value entry shape used throughout the raw CSS v6 extracts.
 */
export interface Css6ValueDefinition {
  /**
   * Name of the value space or value entry.
   */
  readonly name: string;
  /**
   * Absolute URL to the definition in the source specification, when available.
   */
  readonly href?: string | undefined;
  /**
   * Optional prose excerpt captured near the definition.
   */
  readonly prose?: string | undefined;
  /**
   * Category of the value entry, for example `"value"` or `"type"`.
   */
  readonly type?: string | undefined;
  /**
   * Raw CSS Value Definition Syntax string associated with the entry.
   */
  readonly value?: string | undefined;
  /**
   * Nested values defined under this entry.
   */
  readonly values?: Css6ValueDefinition[] | undefined;
}

/**
 * Descriptor definition nested under a raw CSS at-rule extract.
 */
export interface Css6DescriptorDefinition extends Css6ValueDefinition {
  /**
   * Name of the at-rule this descriptor belongs to.
   */
  readonly for: string;
  /**
   * Initial value metadata when exposed by the source specification.
   */
  readonly initial?: string | undefined;
  /**
   * Computed value metadata when exposed by the source specification.
   */
  readonly computedValue?: string | undefined;
}

/**
 * Raw at-rule definition from a per-spec CSS extract.
 */
export interface Css6AtRuleDefinition extends Css6ValueDefinition {
  /**
   * Descriptors defined for the at-rule.
   */
  readonly descriptors: Css6DescriptorDefinition[];
}

/**
 * Raw property definition from a per-spec CSS extract.
 */
export interface Css6PropertyDefinition extends Css6ValueDefinition {
  /**
   * Whether and how the property is animatable, copied verbatim from the
   * specification extract when available.
   */
  readonly animatable?: string | undefined;
  /**
   * Additional animation metadata surfaced by some extracts.
   */
  readonly animatableType?: string | undefined;
  /**
   * Animation type metadata from the property definition table.
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
   * Legacy raw key copied from some source files where the field name includes
   * a non-breaking space.
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
   * Media group metadata from the property definition table.
   */
  readonly media?: string | undefined;
  /**
   * Additional values that extend a previously defined property.
   */
  readonly newValues?: string | undefined;
  /**
   * Percentage resolution metadata from the property definition table.
   */
  readonly percentages?: string | undefined;
  /**
   * CSSOM attribute names generated for this property.
   */
  readonly styleDeclaration?: string[] | undefined;
  /**
   * Used value metadata when exposed by the source specification.
   */
  readonly usedValue?: string | undefined;
}

/**
 * Warning emitted during curation of a raw CSS extract.
 */
export interface Css6Warning {
  /**
   * Human-readable warning message.
   */
  readonly msg: string;
  /**
   * Name of the CSS entry the warning refers to.
   */
  readonly name: string;
  /**
   * Optional prose excerpt captured near the warning location.
   */
  readonly prose?: string | undefined;
  /**
   * Optional URL to the source definition.
   */
  readonly href?: string | undefined;
  /**
   * Category of CSS entry involved in the warning.
   */
  readonly type: string;
  /**
   * Optional raw value associated with the warning.
   */
  readonly value?: string | undefined;
  /**
   * Optional scoping feature the warning refers to.
   */
  readonly for?: string | undefined;
}

/**
 * Raw per-spec CSS extract as exposed by the `@webref/css6` package.
 */
export interface Css6DefinitionFile {
  /**
   * Metadata about the source specification.
   */
  readonly spec: SpecificationDefinition;
  /**
   * Raw property definitions defined in the specification.
   */
  readonly properties: Css6PropertyDefinition[];
  /**
   * Raw at-rule definitions defined in the specification.
   */
  readonly atrules: Css6AtRuleDefinition[];
  /**
   * Raw selector definitions defined in the specification.
   */
  readonly selectors: Css6ValueDefinition[];
  /**
   * Raw type and value-space definitions defined in the specification.
   */
  readonly values: Css6ValueDefinition[];
  /**
   * Optional curation warnings attached to the extract.
   */
  readonly warnings?: Css6Warning[] | undefined;
}

/**
 * Mapping of specification shortnames to raw CSS extract files.
 */
export type Css6DefinitionsBySpecification = Record<string, Css6DefinitionFile>;

/**
 * Reads and parses all raw per-spec CSS extract files in the `@webref/css6`
 * package.
 *
 * @param [options] Optional configuration for locating the JSON files.
 * @returns a Promise that resolves to a map of spec shortnames to raw CSS
 * extract data.
 * @see {@linkcode listAllSync} for the synchronous version of this API.
 */
export function listAll(
  options?: ListAllOptions,
): Promise<Css6DefinitionsBySpecification>;

/**
 * Synchronously reads and parses all raw per-spec CSS extract files in the
 * `@webref/css6` package.
 *
 * @param [options] Optional configuration for locating the JSON files.
 * @returns a map of spec shortnames to raw CSS extract data.
 * @see {@linkcode listAll} for the asynchronous version of this API.
 */
export function listAllSync(
  options?: ListAllOptions,
): Css6DefinitionsBySpecification;

declare const _default: {
  listAll: typeof listAll;
  listAllSync: typeof listAllSync;
};

export default _default;
