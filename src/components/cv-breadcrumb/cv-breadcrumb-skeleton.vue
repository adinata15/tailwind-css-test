<template>
  <nav
    :class="`${carbonPrefix}--breadcrumb ${carbonPrefix}--skeleton`"
    :aria-label="ariaLabel"
  >
    <cv-breadcrumb-item-skeleton></cv-breadcrumb-item-skeleton>
    <cv-breadcrumb-item-skeleton></cv-breadcrumb-item-skeleton>
    <cv-breadcrumb-item-skeleton></cv-breadcrumb-item-skeleton>
  </nav>
</template>

<script>
import CvBreadcrumbItemSkeleton from './_cv-breadcrumb-item-skeleton';
import { carbonPrefixMixin } from '../../mixins';

export default {
  name: 'CvBreadcrumbSkeleton',
  components: {
    CvBreadcrumbItemSkeleton,
  },
  mixins: [carbonPrefixMixin],
  props: {
    ariaLabel: { type: String, default: 'breadcrumb' },
  },
};
</script>
