<script setup>
import ArrayStateVariable from '~/labs/lab4/ArrayStateVariable.vue'
import BooleanStateVariables from '~/labs/lab4/BooleanStateVariables.vue'
import ClickEvent from '~/labs/lab4/ClickEvent.vue'
import Counter from '~/labs/lab4/Counter.vue'
import DateStateVariable from '~/labs/lab4/DateStateVariable.vue'
import ObjectStateVariable from '~/labs/lab4/ObjectStateVariable.vue'
import ParentStateComponent from '~/labs/lab4/ParentStateComponent.vue'
import PassingDataOnEvent from '~/labs/lab4/PassingDataOnEvent.vue'
import PassingFunctions from '~/labs/lab4/PassingFunctions.vue'
import ProfileForm from '~/labs/lab4/profile/ProfileForm.vue'
import StringStateVariables from '~/labs/lab4/StringStateVariables.vue'
import UrlEncoding from '~/labs/lab4/UrlEncoding.vue'
import PropDrilling from '~/labs/lab4/PropDrilling.vue'
import ContextCounterExamples from '~/labs/lab4/context/ContextCounterExamples.vue'
import ContextProfileForm from '~/labs/lab4/context/ContextProfileForm.vue'
import PiniaExamples from '~/labs/lab4/pinia/PiniaExamples.vue'

definePageMeta({ layout: 'labs' })

const theFunction = (m) => alert(m)
const theNameFunction = () => alert('Carter')
const sampleFunction = () => alert('Sample from parent')
</script>
<template>
  <div id="wd-lab4">
    <h2>Lab 4</h2>
    <ClickEvent />
    <PassingDataOnEvent />
    <PassingFunctions message="Hi!" :theFunction="theFunction" :theNameFunction="theNameFunction" :theOtherFunction="sampleFunction" />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariable />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ProfileForm />
    <ParentStateComponent />
    <PropDrilling />
    <UrlEncoding />
    <ContextCounterExamples />
    <ContextProfileForm />
    <PiniaExamples />
  </div>
</template>
