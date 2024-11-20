<script>
    import content from '../../content/content.json'
    let navcontent = content.Navbar
</script>

<div class="flex bg-[#ea3e60] items-center h-16 text-white">
    <h1 class="ml-10 font-bold text-3xl font-space_mono">{navcontent.brand}</h1>
    <div class="flex absolute left-[20rem] gap-10 font-[Consolas]">
        <h2>{navcontent.home}</h2>
        <h2>{navcontent.offer}</h2>
        <h2>{navcontent.service}</h2>
        <h2>{navcontent.menu}</h2>
        <h2>{navcontent.aboutus}</h2>
    </div>
    <div class="flex absolute right-16 gap-10 text-white">
        <h2 class="relative top-3">{navcontent.CTA.login}</h2>
        <h2 class="border border-red-400 rounded-2xl px-5 py-3">{navcontent.CTA.Signup}</h2>
    </div>
</div>