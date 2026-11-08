// frappe-gantt 1.2.2: the reviewed read-only schedule API, not its full surface.
declare module 'frappe-gantt' {
  export interface Task {
    id: string;
    name: string;
    start: string;
    end: string;
    progress: number;
    dependencies?: string | string[];
  }
  export interface Options {
    view_mode?: string;
    readonly?: boolean;
    popup?: false;
    scroll_to?: string;
  }
  export default class Gantt {
    constructor(element: HTMLElement | string, tasks: Task[], options?: Options);
    refresh(tasks: Task[]): void;
    change_view_mode(mode: string, maintainPosition?: boolean): void;
    update_options(options: Options): void;
  }
}
