<script setup lang="ts">
import Card from '~/labs/lab3/children/Card.vue'
import CardHeader from '~/labs/lab3/children/CardHeader.vue'
import CardBody from '~/labs/lab3/children/CardBody.vue'
import Highlight from '~/labs/lab3/Highlight.vue'
import Square from '~/labs/lab3/Square.vue'
</script>
<template>
  <div id="wd-card-demo">
    <Card>
      <CardHeader>Lab 3 Card</CardHeader>
      <CardBody>
        <p>
          Children can be <b>tags</b>, <Highlight>components</Highlight>,
          or both.
        </p>
        <p>
          The square of 3 is <Square>3</Square>.
        </p>
        <button>Got it</button>
      </CardBody>
    </Card>
  </div>
</template>
