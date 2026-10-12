<script setup lang="ts">
import { FaUserCircle } from 'vue3-icons/fa'

definePageMeta({ layout: 'course' })
</script>
<template>
  <div id="wd-people-table" class="overflow-x-auto">
    <table class="w-full border-collapse text-left text-sm">
      <thead>
        <tr class="border-b border-neutral-300">
          <th class="p-2">Name</th>
          <th class="p-2">Login ID</th>
          <th class="p-2">Section</th>
          <th class="p-2">Role</th>
          <th class="p-2">Last Activity</th>
          <th class="p-2">Total Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Tony Stark
          </td>
          <td class="p-2">001234561S</td>
          <td class="p-2">S101</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-10-01</td>
          <td class="p-2">10:21:32</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Bruce Wayne
          </td>
          <td class="p-2">001234562S</td>
          <td class="p-2">S101</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-11-02</td>
          <td class="p-2">23:32:23</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Steve Rogers
          </td>
          <td class="p-2">001234563S</td>
          <td class="p-2">S101</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-10-02</td>
          <td class="p-2">13:21:32</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Natasha Romanoff
          </td>
          <td class="p-2">001234564S</td>
          <td class="p-2">S101</td>
          <td class="p-2">TA</td>
          <td class="p-2">2020-11-05</td>
          <td class="p-2">11:22:33</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Rick Roll
          </td>
          <td class="p-2">001234564S</td>
          <td class="p-2">S101</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-11-05</td>
          <td class="p-2">11:22:33</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            John Doe
          </td>
          <td class="p-2">001234564S</td>
          <td class="p-2">S101</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-11-05</td>
          <td class="p-2">11:22:33</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Jimmy
          </td>
          <td class="p-2">001234564S</td>
          <td class="p-2">S101</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-11-05</td>
          <td class="p-2">11:22:33</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Jane Sample
          </td>
          <td class="p-2">009999991S</td>
          <td class="p-2">S101</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-12-01</td>
          <td class="p-2">08:15:42</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Alex Sample
          </td>
          <td class="p-2">009999992S</td>
          <td class="p-2">S102</td>
          <td class="p-2">STUDENT</td>
          <td class="p-2">2020-12-03</td>
          <td class="p-2">14:07:19</td>
        </tr>
        <tr class="odd:bg-neutral-50">
          <td class="p-2 text-nowrap">
            <FaUserCircle class="me-2 inline text-4xl text-neutral-500" />
            Sam Sample
          </td>
          <td class="p-2">009999993S</td>
          <td class="p-2">S102</td>
          <td class="p-2">TA</td>
          <td class="p-2">2020-12-05</td>
          <td class="p-2">05:48:10</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
