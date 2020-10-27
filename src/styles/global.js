import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
    html {
        height: 100%;

        body {
            #root {
                background: ${theme.colors.background};
                color: ${theme.colors.blue};
                margin-left: auto;
                margin-right: auto;
                padding: 100px;
            }
        }
    }
`}
`;
