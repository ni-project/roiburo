<template>
    <div class="container">
        <map-container />

        <gallery-container />

        <team-container />

        <details-container />
    </div>
</template>

<script>
    import MapContainer from '@/components/Map/MapContainer'
    import GalleryContainer from '@/components/Gallery/GalleryContainer'
    import TeamContainer from '@/components/Team/TeamContainer'
    import DetailsContainer from '@/components/Details/DetailsContainer'

    export default {
        name: 'App',

        components: {
            MapContainer,
            GalleryContainer,
            TeamContainer,
            DetailsContainer
        }
    }
</script>
