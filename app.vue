<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <ClientOnly fallbackTag="span">
    <!-- this component will only be rendered on client side -->
      <p>client side</p>
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>server side</p>
      </template>
    </ClientOnly>
    <ClientOnly>
      789 {{ document }}
    </ClientOnly>
    <el-image src="/favicon.ico" />
    <NuxtPage />
  </div>
</template>
