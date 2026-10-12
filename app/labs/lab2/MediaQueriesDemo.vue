<template>
  <div class="wd-media-queries-demo">
    <h2>Media Query Demo</h2>
    <p>This demo uses CSS media queries to change colors based on screen width:</p>
    <ul>
      <li class="wd-mq-rule-default">Default is White text on Green background</li>
      <li class="wd-mq-rule-ai">Below 750px: White text on Purple background</li>
      <li class="wd-mq-rule-750">750px to 1000px: Black text on Yellow background</li>
      <li class="wd-mq-rule-1000">1000px to 1250px: White text on Blue background</li>
      <li class="wd-mq-rule-1250">Above 1250px: White text on Red background</li>
    </ul>
  </div>
</template>

<style scoped>
.wd-media-queries-demo {
  background-color: green;
  color: white;
  padding: 1rem;
}

.wd-media-queries-demo li {
  opacity: 0.55;
  font-weight: normal;
  text-decoration: none;
}

.wd-media-queries-demo li.wd-mq-rule-default {
  opacity: 1;
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width: 749px) {
  .wd-media-queries-demo {
    background-color: purple;
    color: white;
  }
  .wd-media-queries-demo li.wd-mq-rule-default {
    opacity: 0.55;
    font-weight: normal;
    text-decoration: none;
  }
  .wd-media-queries-demo li.wd-mq-rule-ai {
    opacity: 1;
    font-weight: bold;
    text-decoration: underline;
  }
}

@media (min-width: 750px) and (max-width: 1000px) {
  .wd-media-queries-demo {
    background-color: yellow;
    color: black;
  }
  /* Same specificity as the default highlight — must clear it here */
  .wd-media-queries-demo li.wd-mq-rule-default {
    opacity: 0.55;
    font-weight: normal;
    text-decoration: none;
  }
  .wd-media-queries-demo li.wd-mq-rule-750 {
    opacity: 1;
    font-weight: bold;
    text-decoration: underline;
  }
}

@media (min-width: 1000px) and (max-width: 1250px) {
  .wd-media-queries-demo {
    background-color: blue;
    color: white;
  }
  .wd-media-queries-demo li.wd-mq-rule-default {
    opacity: 0.55;
    font-weight: normal;
    text-decoration: none;
  }
  .wd-media-queries-demo li.wd-mq-rule-1000 {
    opacity: 1;
    font-weight: bold;
    text-decoration: underline;
  }
}

@media (min-width: 1250px) {
  .wd-media-queries-demo {
    background-color: pink;
    color: white;
  }
  .wd-media-queries-demo li.wd-mq-rule-default {
    opacity: 0.55;
    font-weight: normal;
    text-decoration: none;
  }
  .wd-media-queries-demo li.wd-mq-rule-1250 {
    opacity: 1;
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
