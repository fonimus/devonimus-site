import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main className="p-12">
            <h1 className="flex items-center">
                <StaticImage
                    src="../images/logo.png"
                    alt="logo"
                    height={50}
                    loading="eager"
                    placeholder="blurred"
                />
                <span className="ml-3">nimus</span>
            </h1>
            <p className="mt-10 text-xl">Mon nom est François Onimus, je suis
                développeur fullstack.</p>
            <p className="mt-10 text-xl">Le nom de mon entreprise est <a
                className="text-lg"
                href="https://data.inpi.fr/entreprises/891226276"
                target="_blank" rel="noreferrer">
                <code className="underline">DevOnimus</code>
            </a>.
            </p>
            <p className="mt-10 text-xl">Ci dessous les liens vers mes
                différents
                profils:</p>
            <ul className="mt-4 indent-8">
                <li>
                    <a className="text-lg" href="https://github.com/fonimus/"
                       target="_blank" rel="noreferrer">
                        Github
                    </a>
                </li>
                <li>
                    <a className="text-lg"
                       href="https://www.linkedin.com/in/fran%C3%A7ois-onimus-a5713764/"
                       target="_blank" rel="noreferrer">
                        Linkedin
                    </a>
                </li>
            </ul>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>fonimus</title>;
