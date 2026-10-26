<script setup lang="ts">
import * as db from '~/kambaz/database'

definePageMeta({ layout: 'course' })

const route = useRoute()
const cid = computed(() => route.params.cid as string)
// [...aid] is a catch-all route, so Nuxt gives aid as an array of path segments.
const aid = computed(() => [route.params.aid].flat()[0])
const assignment = computed(() => db.assignments.find((a) => a._id === aid.value))
</script>
<template>
  <div id="wd-assignments-editor">
    <label for="wd-name">Assignment Name</label>
    <input id="wd-name" :value="assignment?.title ?? ''" /> <br />
    <span id="wd-assignment-id">Assignment id: {{ aid }}</span> <br /><br />
    <textarea id="wd-description" :value="assignment?.description ?? ''" rows="8" class="w-full" /> <br />
    <table>
      <tbody>
        <tr>
          <td align="right" valign="top">
            <label for="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" :value="assignment?.points ?? 100" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label for="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" :value="assignment?.due" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label for="wd-available-from">Available from</label>
          </td>
          <td>
            <input type="date" id="wd-available-from" :value="assignment?.available" />
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <NuxtLink :to="`/courses/${cid}/assignments`" id="wd-cancel">Cancel</NuxtLink> <NuxtLink :to="`/courses/${cid}/assignments`" id="wd-save">Save</NuxtLink>
  </div>
</template>
