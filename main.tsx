import * as fs from "fs";
import Nano from "nano-jsx";
import { Helmet } from "nano-jsx";

function Code({ code }: { code: string }) {
  return (
    <span
      style={{
        fontFamily: "monospace",
        borderRadius: "4px",
        background: "hsl(0, 0%, 95%)",
        padding: "0 4px",
      }}
    >
      {code}
    </span>
  );
}

function AtPlace({ place, children }: { place: string; children: string }) {
  return (
    <li>
      <span style={{ color: "hsl(200, 0%, 30%)", fontWeight: 600 }}>
        @{place}:{" "}
      </span>
      {children}
    </li>
  );
}

function App() {
  return (
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

      <p>I'm an engineer working from Paris. Things I've done:</p>

      <ul>
        <li>graduated from École polytechnique in 2018</li>
        <li>worked on word embeddings at Université de Montréal in 2016</li>
        <li>
          worked on transformers for dialogue models at Facebook AI Research in
          2018
        </li>
        <AtPlace place="fair">
          iterated on model architectures for retrieval-based chat bots
        </AtPlace>
        <AtPlace place="fair">
          built an automatic dialogue evaluation toolkit - with its own dataset
          (mturk)
        </AtPlace>
        <AtPlace place="fair">
          did research on dynamic batch composition
        </AtPlace>
        <li>
          contributed to <Code code="pytorch" /> and huggingface's{" "}
          <Code code="datasets" /> library
        </li>

        <li style={{ marginTop: "16px" }}>
          worked as machine learning engineer at{" "}
          <a href="https://nabla.com">nabla.com</a> from 2018 to 2021
        </li>
        <AtPlace place="nabla">
          training stack &amp; framework, mlops infra to retrain models at night
        </AtPlace>
        <AtPlace place="nabla">
          built an EHR with predictive features, e.g. autocomplete
        </AtPlace>
        <AtPlace place="nabla">
          team lead &amp; product owner for the whole doctor facing app
        </AtPlace>

        <li style={{ marginTop: "16px" }}>
          built <a href="https://talkiewalkie.app">talkiewalkie.app</a> (2021)
        </li>
        <AtPlace place="talkiewalkie">found 2 co-founders</AtPlace>
        <AtPlace place="talkiewalkie">
          built an iOS demo app with offline abilities
        </AtPlace>

        <li style={{ marginTop: "16px" }}>
          building <a href="https://swype.so">swype.so</a> as a side project
        </li>
        <AtPlace place="swype">build editor with a product designer</AtPlace>
        <AtPlace place="swype">working on distribution</AtPlace>

        <li style={{ marginTop: "16px" }}>
          paid rent as a full-stack freelancer @
          <a href="https://zefir.fr">zefir.fr</a>, @
          <a href="https://ubble.ai">ubble.ai</a> (2021-2022)
        </li>

        <li style={{ marginTop: "16px" }}>joined <a href="https://ecair.eco">ecair.eco</a> (2023)</li>
      </ul>

      <h2>About talkiewalkie.app</h2>
      <p>
        Work on talkiewalkie.app started by early summer 2021, with a vision
        that was very close to{" "}
        <a href="https://techcrunch.com/2018/04/24/bose-acquires-andrew-masons-walking-tour-startup-detour/">
          detour
        </a>
        .
        <br />
        The core idea being that voice messaging usage is huge and hardly
        adressed. We would provide transcripts of message and enhance those with
        emojis, play with the text to render speech speed and tone visually,
        etc.
        <br />
        While the idea tested well, the team decided to split after a few months
        due to diverging interests.
      </p>

      <h2>About swype.so</h2>
      <p>
        Work on Swype started in early 2022 but was done around a different
        narrative. After working the summer as a freelancer I decided to revive
        the core technology around a simpler premise.
        <br />
        Swype is a side-project that I'm running as a solo-founder - with help
        from a generous product designer friend.
      </p>

      <h2>About ecair.eco</h2>
      <p>
        I've had the rare chance to align my values and my work and I joined
        Victor Jolly and Maxime Bensadoun to work on Ecair.eco in July of 2023.
        <br />
        We're building the consumer company for the ecological transition of
        residential units in France, taking the full vertical: we're hiring
        construction workers and providing them with processes and tools (where
        I come in!) to help them deliver.
        <br />
        <br />
        I'm hiring two persons to help me build this vision! Check out{" "}
        <a href="https://ecair.eco/jobs/product-engineer">our jobs page</a>
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
}

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
    @font-face {
        font-family: Pally;    
        src: url("/Pally-Bold.woff2") format("woff2");
    }
    
    body {
        font-family: Inter, Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 32px;
        color: hsl(0, 0%, 30%);
        max-width: 40rem;
    }
    
    @media (max-width: 500px) {
        body {
            padding: 8px
        }
    }
    
    h1 {
        color: hsl(200, 10%, 12%);
        font-weight: 700;
        font-size: 48px;
        letter-spacing: 2px;
        font-family: Pally, serif;
    }
    h2 {
        margin-top: 32px;
        font-family: Pally, serif;
        font-weight: 600;
        font-size: 24px;
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