import * as fs from "fs";
import Nano from "nano-jsx";
import { Helmet } from "nano-jsx";

const App = () => (
  <div>
    <Helmet>
      <html lang="en" amp />
      <title>Théo Matussière</title>
      <meta name="description" content="Théo Matussière's homepage" />
    </Helmet>

    <Helmet footer>
      <script src="/scripts.js"></script>
    </Helmet>

    <h1>Théo Matussière</h1>

    <p>I live in Paris. Things I've done:</p>
    <ul>
      <li>studied mathematics &amp; engineering at École polytechnique</li>
      <li>
        did academic work in machine learning at Université de Montréal and
        Facebook AI Research
      </li>
      <li>
        worked as a machine learning engineer then as a team lead at{" "}
        <a href="https://nabla.com">nabla.com</a>
      </li>
      <li>worked as a full-stack freelancer</li>
      <li>
        founded <a href="https://talkiewalkie.app">talkiewalkie.app</a>
      </li>
      <li>
        founded <a href="https://scorrilo.com">scorrilo.com</a>
      </li>
    </ul>

    <h2>About talkiewalkie.app</h2>
    <p>
      Work on talkiewalkie.app started by early summer 2021, with a vision that
      was very close to{" "}
      <a href="https://techcrunch.com/2018/04/24/bose-acquires-andrew-masons-walking-tour-startup-detour/">
        detour
      </a>{" "}
      (which I then didn't know existed).
      <br />I build a team of three to start working on the idea, and we pivoted
      to something simpler, if not more ambitious: a chat app. The core idea
      being that voice messaging usage is huge and hardly adressed. We would
      provide transcripts of message and enhance those with emojis, play with
      the text to render speech speed and tone visually, etc.
      <br />
      The idea was very popular and tested well, we had the know-how to build
      the app and make the right calls re:machine learning. VCs chimed in, and
      were a big distraction to us, new founders - to the point that we ended up
      with a term sheet that tore our team between accepting or refusing.
    </p>

    <h2>About scorrilo.com</h2>
    <p>
      Work on Scorrilo started in early 2022 but was done around a different
      narrative. After working the summer as a freelancer I decided to revive
      the core technology around a simpler premise.
      <br />
      Scorrilo is a side-project that I'm running as a solo-founder - with help
      from a generous product designer friend.
    </p>

    <hr />
    <p>You can find me on the internet at:</p>
    <ul>
      <li>
        <a href="https://twitter.com/theo_matussiere">twitter</a>
      </li>
      <li>
        <a href="https://github.com/theo-m/">github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/theomatussiere/">linkedin</a>
      </li>
      <li>
        <a href="mailto:tmatussiere+homepage@gmail.com">email</a>
      </li>
    </ul>
  </div>
);

const app = Nano.renderSSR(<App />);
const { body, head, footer, attributes } = Helmet.SSR(app);

const html = `
<!DOCTYPE html>
<html ${attributes.html.toString()}>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
    body {
        font-family: Inter, Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 2rem;
        color: hsl(0, 0%, 40%);
        max-width: 600px;
    }
    h1 {
        color: hsl(0, 0%, 20%);
        font-weight: 600;
        font-size: 24px;
    }
    h2 {
        font-weight: 600;
        font-size: 16px;
        color: hsl(0, 0%, 20%);
    }
    a {
        color: black;
    }
    a:hover {
            color: hsl(0, 0%, 40%);
    }
    </style>
    ${head.join("\n")}
  </head>
  <body ${attributes.body.toString()}>
    ${body}
    ${footer.join("\n")}
  </body>
</html>`;

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}
fs.writeFileSync("dist/index.html", html);
