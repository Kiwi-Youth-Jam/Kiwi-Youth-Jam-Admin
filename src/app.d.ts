// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
            user: {
				firstname: string,
				lastname: string,
				email: string
			} | null
        }
	}
}

export {};
