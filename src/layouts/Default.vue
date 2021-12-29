<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>
        E-vents
      </v-toolbar-title>
    </v-app-bar>
    <p>{{ $static.metadata.siteDescription }}</p>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>
