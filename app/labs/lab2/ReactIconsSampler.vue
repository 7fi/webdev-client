<script setup>
import { VscAccount } from 'vue3-icons/vsc'
import { AiOutlineDashboard } from 'vue3-icons/ai'
import { FaBookBible } from 'vue3-icons/fa6'
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from 'vue3-icons/fa'
import { HiAcademicCap } from 'vue3-icons/hi2'
import { LuRocket } from 'vue3-icons/lu'
import { MdSchool } from 'vue3-icons/md'
import { BiSolidHeart } from 'vue3-icons/bi'
import './tailwind/utilities.css'
</script>
<template>
  <div id="wd-react-icons-sampler" class="mb-4 font-sans">
    <h2 class="text-lg font-semibold">React Icons Sampler</h2>
    <div class="flex gap-3 text-3xl">
      <VscAccount />
      <AiOutlineDashboard />
      <FaBookBible />
      <FaCalendar />
      <FaEnvelopeOpenText />
      <FaRegClock />
      <MdSchool class="text-blue-600" />
      <BiSolidHeart class="size-10 text-red-500" />
      <HiAcademicCap class="text-4xl text-blue-600" />
      <LuRocket class="text-4xl text-orange-500" />
    </div>
  </div>
</template>
