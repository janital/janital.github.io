<script>
  import { LinkedinLogo } from "phosphor-svelte";
  import { GithubLogo } from "phosphor-svelte";
  import { GitlabLogo } from "phosphor-svelte";

  const heading = "<janita-røyseth/>";
</script>

<section class="section hero__section">
  <h1 class="heading-primary">
    <p class="heading-primary__name">
      {heading}
    </p>
      <span class="heading-primary__about">
        Hi there! I'm a 3rd year computer science student at NTNU campus Ålesund
      </span>
    </h1>
  <div class="hero__contact">
    <a class="btn hero__btn" href="https://no.linkedin.com/in/janita-lillevik-r%C3%B8yseth-1a1885154" target="_blank">
      <LinkedinLogo size={40} weight="light" />
    </a>
    <a class="btn hero__btn" href="https://github.com/janital" target="_blank">
      <GithubLogo size={40} weight="light" />
    </a>
    <a class="btn hero__btn" href="https://gitlab.com/janital" target="_blank">
      <GitlabLogo size={40} weight="light" />
    </a>
  </div>
</section>