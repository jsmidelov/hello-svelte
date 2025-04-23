<script lang="ts">
    let {
        title = '',
        thumbnail = '',
        prefetch,
        onclick,
    } = $props();    
</script>

<article onmouseover={prefetch} onfocus={prefetch} >
    <img src="{thumbnail}" alt="{title}" />
    <p>{title}</p>
    <button {onclick}>Read more</button>
</article>

<style>
    article {
        display: block;
        gap: 1rem;
        width: 100%;
        max-width: 300px;
        padding: 1rem;
        background-color: white;
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
    }
    img {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1 / 1;
        margin: 0 auto 
    }
    p {
        font-weight: 900;
    }
    button {
        float: right;
        padding:10px;
        color: white;
        border-radius: 10px;
        background-color: rebeccapurple;
    }
</style>