<script lang="ts">
    let {
        title = '',
        thumbnail = '',
        onclick,
    } = $props();    
</script>

<article class="card bg-base-100 w-96 shadow-lg">
    <figure>
        <img src="{thumbnail}" alt="{title}" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <button class="btn" {onclick}>Read more</button>
    </div>
</article>

<style>
</style>