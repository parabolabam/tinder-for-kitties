<template>
  <div class="baseLayout">
    <div class="header">
      <slot name="header" />
    </div>
    <article>
      <div class="baseContent">
        <slot name="baseContent" />
      </div>
    </article>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'base-layout',
};
</script>
