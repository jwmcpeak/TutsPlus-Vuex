<template>
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light shadow mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">VueDo</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto mt-2">

          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view :todos="$store.state.todos" />
    </div>  
  </div>
</template>

<style>
.shadow {
  box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
}
</style>
