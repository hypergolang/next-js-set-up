/**
 * Challenge: Remove the h1 we made and replace it with a <header> component
 * Inside the header, put a `nav` element to represent a sitewide navigation
 * bar that should be shared amongst all the pages of our site.
 * 
 * For now, put any kind of text content inside the `nav` as a placeholder
 * so we can see that it's working.
 * 
 * You then should be able to manually navigate between the `/` and `/about`
 * routes and see that shared `nav` content between them.
 */

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>

                <header>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </header>
                { children }

                <footer>Footer content here</footer>

            </body>
        </html>
    )
}