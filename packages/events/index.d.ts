/**
 * Represents the metadata for a single event target as defined in the
 * `events.json` file of the `@webref/events` package.
 */
export interface EventTargetDefinition {
  /**
   * The name of the event target. Corresponds to the interface name of the
   * `EventTarget` found in the `target` property of the event definition.
   * @example "HTMLElement"
   */
  readonly target: string;
  /**
   * Whether or not the event bubbles. Corresponds to the `bubbles` property of
   * the `Event` interface in the DOM API.
   */
  readonly bubbles?: boolean | undefined;
  /**
   * An array of strings representing the path of event targets that the event
   * bubbles through.
   * @example ["Node", "Document", "Window"]
   */
  readonly bubblesPath?: string[] | undefined;
}

/**
 * Metadata regarding the source of an event definition, including an optional
 * URL to the specification text and free-form source format description.
 */
export interface EventSourceDefinition {
  /**
   * The format of the source from which the event definition was extracted.
   * This is a free-form string that describes the type of source (e.g.,
   * "summary table", "IDL eventHandler", etc.).
   * @example "fire an event phrasing"
   */
  readonly format: string;
  /**
   * An optional URL to the specification text from which the event definition was extracted.
   * @example "https://w3c.github.io/uievents/#events-click"
   */
  readonly href?: string | undefined;
}

/**
 * Represents a specification reference in the context of an event definition.
 */
export interface SpecificationReference {
  /**
   * An identifier for the specification referenced, in URL-safe slug format.
   * @example "edit-context"
   */
  readonly spec: string;
  /**
   * An optional URL to the specification text for the referenced specification.
   * @example "https://w3c.github.io/edit-context/#update-the-editcontext"
   */
  readonly href?: string | undefined;
}

/**
 * Represents the metadata for a single event as defined in the `events.json`
 * file of the `@webref/events` package.
 */
export interface EventDefinition {
  /**
   * An object representing the source of the event, along with its associated
   * metadata.
   */
  readonly src: EventSourceDefinition;
  /**
   * The type of the event. Corresponds to the `type` property of the `Event`
   * interface in the DOM API.
   * @example "click"
   */
  readonly type: string;
  /**
   * The specification URL where the event is defined.
   * @example "https://w3c.github.io/uievents/#events-click"
   */
  readonly href: string;
  /**
   * The name of the interface that defines the event.
   * @example "MouseEvent"
   */
  readonly interface: string;
  /**
   * An array of objects representing the targets that can dispatch this event,
   * along with their associated metadata.
   */
  readonly targets: EventTargetDefinition[];
  /**
   * Whether or not the event is cancelable. Corresponds to the `cancelable`
   * property of the `Event` interface in the DOM API.
   */
  readonly cancelable?: boolean | undefined;
  /**
   * An array of specification references for specifications that extend the
   * definition of this event.
   */
  readonly extendedIn?: SpecificationReference[] | undefined;
}

export interface ListAllOptions {
  /**
   * Path to the folder containing an `events.json` file to read from. Defaults
   * to the path of the `@webref/events` package itself. This is only intended
   * for testing purposes, and will rarely be used by end-users of the package.
   *
   * @default {__dirname}
   */
  folder?: string | undefined;
}

/**
 * Lists all events defined in the `events.json` file of the `@webref/events`
 * package, along with their associated metadata.
 *
 * @param [options] Optional configuration for listing events.
 * @returns a Promise that resolves to an array of event metadata objects, or
 * rejects with an error if there is an issue reading/parsing the JSON file.
 * @see {@linkcode EventDefinition} for the objects returned by this function.
 */
export function listAll(options?: ListAllOptions): Promise<EventDefinition[]>;

declare const _default: {
  listAll: typeof listAll;
};

export default _default;
