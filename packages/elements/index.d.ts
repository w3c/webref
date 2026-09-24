/**
 * Metadata about a specification represented in the `@webref/elements`
 * package.
 */
export interface SpecificationDefinition {
  /**
   * Human-readable specification title.
   */
  readonly title: string;
  /**
   * Canonical URL for the specification.
   */
  readonly url: string;
}

/**
 * Definition of a single markup element exposed by a specification.
 */
export interface ElementDefinition {
  /**
   * Element local name as defined by the specification.
   * @example "video"
   */
  readonly name: string;
  /**
   * Absolute URL to the element definition in the source specification.
   */
  readonly href: string;
  /**
   * Name of the Web IDL interface implemented by the element, when one exists.
   */
  readonly interface?: string | undefined;
  /**
   * Whether the element is obsolete.
   * This property is only present when the value is `true`.
   */
  readonly obsolete?: true | undefined;
}

/**
 * Collection of element definitions extracted from a single specification.
 */
export interface SpecificationElementsDefinition {
  /**
   * Metadata about the source specification.
   */
  readonly spec: SpecificationDefinition;
  /**
   * Elements defined by the specification.
   */
  readonly elements: ElementDefinition[];
}

/**
 * Mapping of specification shortnames to their element definitions.
 */
export type ElementDefinitionsBySpecification = Record<
  string,
  SpecificationElementsDefinition
>;

export interface ListAllOptions {
  /**
   * Path to the folder that contains the element definition JSON files to read
   * from. Defaults to the path of the `@webref/elements` package itself.
   *
   * @default {__dirname}
   */
  folder?: string | undefined;
}

/**
 * Reads and parses all element definition files in the `@webref/elements`
 * package.
 *
 * @param [options] Optional configuration for locating the JSON files.
 * @returns a Promise that resolves to a map of specification shortnames to
 * element definition data.
 */
export function listAll(
  options?: ListAllOptions,
): Promise<ElementDefinitionsBySpecification>;

declare const _default: {
  listAll: typeof listAll;
};

export default _default;
