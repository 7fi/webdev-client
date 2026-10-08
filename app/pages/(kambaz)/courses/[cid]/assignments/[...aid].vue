<script setup lang="ts">
definePageMeta({ layout: 'course' })
</script>
<template>
  <div id="wd-assignments-editor">
    <label htmlFor="wd-name">Assignment Name</label>
    <input id="wd-name" defaultValue="A1 - ENV + HTML" />
    <br />
    <br />
    <textarea id="wd-description">The assignment is available online Submit a link to the landing page of your Web application running on Vercel.</textarea>
    <br />
    <table>
      <tbody>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue="100" />
          </td>
        </tr>
        <tr>
          <td align="right">
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right">
            <select id="wd-display-grade-as">
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right">
            <select id="wd-submission-type">
              <option>Online</option>
              <option>In-person</option>
            </select>
          </td>
          <td align="right">
            <ul>
              <li>
                <label> <input type="checkbox" id="wd-text-entry" />Text Entry</label>
              </li>
              <li>
                <label> <input type="checkbox" id="wd-website-url" />Website Url</label>
              </li>
              <li>
                <label> <input type="checkbox" id="wd-media-recordings" />Media Recordings</label>
              </li>
              <li>
                <label> <input type="checkbox" id="wd-student-annotation" />Student Annotation</label>
              </li>
              <li>
                <label> <input type="checkbox" id="wd-file-upload" />File Upload</label>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td align="right">
            <label>Assign to: <input type="text" placeholder="Everyone" value="Everyone" id="wd-assign-to" /> </label>
            <label> Due: <input type="date" id="wd-due-date" /> </label>
            <label> Available From: <input type="date" id="wd-available-from" /> </label>
            <label> Until: <input type="date" id="wd-available-until" /> </label>
          </td>
        </tr>
        <tr>
          <td align="right">
            <hr />
            <NuxtLink to="./"><button id="wd-cancel">Cancel</button></NuxtLink>
            <NuxtLink to="./"><button id="wd-save">Save</button></NuxtLink>
          </td>
        </tr>
        <!-- {/* Complete on your own — see checklist below */} -->
      </tbody>
    </table>
  </div>
</template>
