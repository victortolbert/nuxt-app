<template>
  <Suspense>
    <PageView />
    <ExampleDropdownButton />
    <template #fallback>
      <div class="italic opacity-50">
        <span class="animate-pulse">Loading...</span>
      </div>
    </template>
  </Suspense>
</template>
