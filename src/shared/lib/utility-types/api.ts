export type ApiMetadata<D> =
  | { status: "initial" | "loading" }
  | { status: "done"; data: D }
  | { status: "error"; error: Error };
