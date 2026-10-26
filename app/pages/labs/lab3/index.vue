<script setup>
import BooleanVariables from '~/labs/lab3/BooleanVariables.vue'
import ConditionalOutputIfElse from '~/labs/lab3/ConditionalOutputIfElse.vue'
import ConditionalOutputInline from '~/labs/lab3/ConditionalOutputInline.vue'
import IfElse from '~/labs/lab3/IfElse.vue'
import LegacyFunctions from '~/labs/lab3/LegacyFunctions.vue'
import NullUndefined from '~/labs/lab3/NullUndefined.vue'
import TernaryOperator from '~/labs/lab3/TernaryOperator.vue'
import VariablesAndConstants from '~/labs/lab3/VariablesAndConstants.vue'
import VariableTypes from '~/labs/lab3/VariableTypes.vue'
import ArrowFunctions from '~/labs/lab3/ArrowFunctions.vue'
import ImpliedReturn from '~/labs/lab3/ImpliedReturn.vue'
import TemplateLiterals from '~/labs/lab3/TemplateLiterals.vue'
import SimpleArrays from '~/labs/lab3/SimpleArrays.vue'
import ArrayIndexAndLength from '~/labs/lab3/ArrayIndexAndLength.vue'
import AddingAndRemovingToFromArrays from '~/labs/lab3/AddingAndRemovingToFromArrays.vue'
import ForLoops from '~/labs/lab3/ForLoops.vue'
import MapFunction from '~/labs/lab3/MapFunction.vue'
import FindFunction from '~/labs/lab3/FindFunction.vue'
import FindIndex from '~/labs/lab3/FindIndex.vue'
import FilterFunction from '~/labs/lab3/FilterFunction.vue'
import IncludesSomeEvery from '~/labs/lab3/IncludesSomeEvery.vue'
import ReduceFunction from '~/labs/lab3/ReduceFunction.vue'
import JsonStringify from '~/labs/lab3/JsonStringify.vue'
import House from '~/labs/lab3/House.vue'
import Spreading from '~/labs/lab3/Spreading.vue'
import Destructing from '~/labs/lab3/Destructing.vue'
import FunctionDestructing from '~/labs/lab3/FunctionDestructing.vue'
import DestructingImports from '~/labs/lab3/DestructingImports.vue'
import OptionalChaining from '~/labs/lab3/OptionalChaining.vue'
import Classes from '~/labs/lab3/Classes.vue'
import Styles from '~/labs/lab3/Styles.vue'
import ClientComponentDemo from '~/labs/lab3/ClientComponentDemo.vue'
import ServerComponentDemo from '~/labs/lab3/ServerComponentDemo.vue'
import Add from '~/labs/lab3/Add.vue'
import Square from '~/labs/lab3/Square.vue'
import Highlight from '~/labs/lab3/Highlight.vue'
import PathParameters from '~/labs/lab3/PathParameters.vue'
import TodoList from '~/labs/lab3/todos/TodoList.vue'

definePageMeta({ layout: 'labs' })

console.log('Hello World!')
</script>
<template>
  <div id="wd-lab3">
    <h2>Lab 3</h2>
    <VariablesAndConstants />
    <VariableTypes />
    <BooleanVariables />
    <IfElse />
    <TernaryOperator />
    <ConditionalOutputIfElse />
    <ConditionalOutputInline />
    <NullUndefined />
    <LegacyFunctions />
    <ArrowFunctions />
    <ImpliedReturn />
    <TemplateLiterals />
    <SimpleArrays />
    <ArrayIndexAndLength />
    <AddingAndRemovingToFromArrays />
    <ForLoops />
    <MapFunction />
    <FindFunction />
    <FindIndex />
    <FilterFunction />
    <IncludesSomeEvery />
    <ReduceFunction />
    <JsonStringify />
    <House />
    <Spreading />
    <Destructing />
    <FunctionDestructing />
    <DestructingImports />
    <OptionalChaining />
    <Classes />
    <Styles />
    <ClientOnly>
      <ClientComponentDemo />
    </ClientOnly>
    <ServerComponentDemo />
    <Add :a="3" :b="4" />
    <Add :a="10" :b="20" />
    <Add :a="7" :b="8" />
    <h4>Square of 4</h4>
    <Square>4</Square>
    <h4>Square of 9</h4>
    <Square>9</Square>
    <hr />
    <p>Square of 5 = <Square>5</Square></p>
    <hr />
    <Highlight> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Highlight>
    <hr />
    <Highlight>Children can be any JSX</Highlight>
    <PathParameters />
    <TodoList />
  </div>
</template>
