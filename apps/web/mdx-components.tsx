import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="text-black dark:text-white">{children}</h2>,
    h4: ({ children }) => <h4 className="text-black dark:text-white">{children}</h4>,
    ...components,
  }
}