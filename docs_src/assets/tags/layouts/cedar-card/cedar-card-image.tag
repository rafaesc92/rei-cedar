<cedar-card-image
    class="
    { card-media: true }
    { ratio }
    { orientation }
    { position }
    ">
       <img src={ path } alt={ alt } />
        <script>
            this.ratio = opts.ratio || 'media-frame ratio-3-4'
            this.orientation = opts.orientation || portrait
            this.position = opts.position || 'center'
            this.path = opts.path
            this.alt = opts.alt
        </script>
        <style scoped>
            :scope { display: block; }
        </style>
</cedar-card-image>
