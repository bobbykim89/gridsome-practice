<template>
  <Layout>
    <h1>
      {{ $page.event.title }}
    </h1>
    <img
      src="http://localhost:1337/uploads/fjwzqx9nutnmz9k3pjur_b438f05796.jpg"
      alt="pollito"
      height="400px"
    />
    <p>
      {{ $page.event.description }}
    </p>
  </Layout>
</template>

<page-query>
    query ($id: ID) {
        event(id: $id) {
            id
            title
            duration
            description
            price
            date
            
        }
    }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.event.title,
    };
  },
};
</script>
