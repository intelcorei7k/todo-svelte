import { writable } from 'svelte/store';

type task = {
    name: string,
}

export const tasks = writable<task[]>([]);