import * as WebIDL2 from "webidl2";

/**
 * File handle returned by {@linkcode listAll} for a single `.idl` file in the
 * package.`
 */
export interface IDLFile {
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
   * Asynchronously parses the IDL source with `WebIDL2.parse`.
   */
  parse(): Promise<WebIDL2.IDLRootType[]>;
}

/**
 * Options for locating `.idl` files in the `@webref/idl` package, used by the
 * {@linkcode listAll} and {@linkcode parseAll} functions.
 */
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
 * Reads all `.idl` files in the `@webref/idl` package and returns lazy file
 * handles for them.
 *
 * @param [options] Optional configuration for locating the `.idl` files.
 * @returns a Promise that resolves to a map of specification shortnames to
 * file handles.
 */
export function listAll(
  options?: ListAllOptions,
): Promise<Record<string, IDLFile>>;

/**
 * Reads and parses every `.idl` file in the `@webref/idl` package with
 * {@linkcode WebIDL2.parse}.
 *
 * @param [options] Optional configuration for locating the `.idl` files.
 * @returns a Promise that resolves to a map of specification shortnames to
 * parsed ASTs.
 */
export function parseAll(
  options?: ListAllOptions,
): Promise<Record<string, WebIDL2.IDLRootType[]>>;

declare const _default: {
  listAll: typeof listAll;
  parseAll: typeof parseAll;
};

export default _default;

export type * from "webidl2";
