export interface ListAllOptions {
  /**
   * Path to the folder containing `.idl` files to read from. Defaults to the
   * path of the `@webref/idl` package itself.
   *
   * @default {__dirname}
   */
  folder?: string | undefined;
}

/**
 * Partial description of a Web IDL type node as returned by `webidl2.parse`.
 * The parser exposes a richer structure than this interface captures, so an
 * index signature is included for forwards compatibility with new node fields.
 */
export interface WebIdlTypeDescription {
  /**
   * Parser-specific type tag for the type node.
   */
  readonly type?: string | null | undefined;
  /**
   * Generic wrapper name when the type is generic, for example `Promise`.
   */
  readonly generic?: string | undefined;
  /**
   * Whether the type is nullable.
   */
  readonly nullable?: boolean | undefined;
  /**
   * Whether the type is a union.
   */
  readonly union?: boolean | undefined;
  /**
   * Extended attributes attached to the type node.
   */
  readonly extAttrs?: WebIdlDefinition[] | undefined;
  /**
   * Nested subtype information when exposed by the parser.
   */
  readonly subtype?: WebIdlTypeDescription[] | undefined;
  /**
   * Underlying IDL type description, which may itself be nested.
   */
  readonly idlType?:
    | string
    | WebIdlTypeDescription
    | WebIdlTypeDescription[]
    | undefined;
  /**
   * Additional parser-specific fields surfaced by `webidl2`.
   */
  readonly [key: string]: unknown;
}

/**
 * Partial description of a Web IDL AST node returned by `webidl2.parse`.
 * The parser exposes a broad set of node variants; this interface models the
 * fields that callers most commonly inspect while remaining open-ended.
 */
export interface WebIdlDefinition {
  /**
   * Parser-specific type tag for the AST node.
   * @example "interface"
   */
  readonly type: string;
  /**
   * Node name when the AST node represents a named Web IDL construct.
   */
  readonly name?: string | undefined;
  /**
   * Inheritance target for interface-like definitions, when present.
   */
  readonly inheritance?: string | null | undefined;
  /**
   * Whether the definition is marked as partial.
   */
  readonly partial?: boolean | undefined;
  /**
   * Member nodes nested under interface-like definitions.
   */
  readonly members?: WebIdlDefinition[] | undefined;
  /**
   * Argument nodes nested under operation-like definitions.
   */
  readonly arguments?: WebIdlDefinition[] | undefined;
  /**
   * Extended attributes attached to the definition.
   */
  readonly extAttrs?: WebIdlDefinition[] | undefined;
  /**
   * IDL type information attached to the definition, when present.
   */
  readonly idlType?:
    | string
    | WebIdlTypeDescription
    | WebIdlTypeDescription[]
    | undefined;
  /**
   * Default value metadata attached to arguments and dictionary fields.
   */
  readonly default?: WebIdlDefinition | undefined;
  /**
   * Additional parser-specific fields surfaced by `webidl2`.
   */
  readonly [key: string]: unknown;
}

/**
 * Parsed AST returned by `webidl2.parse`.
 */
export type WebIdlParseResult = WebIdlDefinition[];

/**
 * File handle returned by {@linkcode listAll} for a single `.idl` file in the
 * package.
 */
export interface IDLFileDefinition {
  /**
   * File name, including the `.idl` extension.
   */
  readonly filename: string;
  /**
   * Specification shortname derived from the file name.
   */
  readonly shortname: string;
  /**
   * Absolute path to the underlying `.idl` file on disk.
   */
  readonly path: string;
  /**
   * Asynchronously reads the raw IDL source text.
   */
  text(): Promise<string>;
  /**
   * Asynchronously parses the IDL source with `webidl2.parse`.
   */
  parse(): Promise<WebIdlParseResult>;
}

/**
 * Mapping of specification shortnames to lazily readable IDL file handles.
 */
export type IDLFileMap = Record<string, IDLFileDefinition>;

/**
 * Mapping of specification shortnames to parsed Web IDL ASTs.
 */
export type ParsedIDLMap = Record<string, WebIdlParseResult>;

/**
 * Reads all `.idl` files in the `@webref/idl` package and returns lazy file
 * handles for them.
 *
 * @param [options] Optional configuration for locating the `.idl` files.
 * @returns a Promise that resolves to a map of specification shortnames to file
 * handles.
 */
export function listAll(options?: ListAllOptions): Promise<IDLFileMap>;

/**
 * Reads and parses every `.idl` file in the `@webref/idl` package with
 * `webidl2.parse`.
 *
 * @param [options] Optional configuration for locating the `.idl` files.
 * @returns a Promise that resolves to a map of specification shortnames to
 * parsed ASTs.
 */
export function parseAll(options?: ListAllOptions): Promise<ParsedIDLMap>;

declare const _default: {
  listAll: typeof listAll;
  parseAll: typeof parseAll;
};

export default _default;
