<script lang="ts">
    const { type='text', text, id } = $props();
</script>

<div class="text-field">
    <input type={type} id={id} name={id} placeholder=" " required>

    <label for={id}>{text}</label>

    <fieldset>
        <legend><span>{text}</span></legend>
    </fieldset>
</div>

<style>
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
        -webkit-text-fill-color: white !important;
        transition: background-color 2147483647s ease;
    }

    .text-field {
        position: relative;
        width: 280px;
        font-family: "Plus Jakarta Sans", "Inter", sans-serif;
    }

    .text-field input {
        width: 100%;
        padding: 16px 14px;
        font-size: 16px;
        border: none;
        outline: none;
        background: transparent;
        color: white;
    }

    .text-field fieldset {
        display: flex;
        text-align: left;
        position: absolute;
        inset: 0;
        border: 1.5px solid #9e9e9e;
        border-radius: 8px;
        pointer-events: none;
        background-color: rgba(255, 255, 255, 0.05);
        transition: border-color border-radius 0.2s;
    }

    .text-field fieldset legend {
        display: none;
        line-height: 12px;
        white-space: nowrap;
        overflow: hidden;
        transition: max-width 0.2s ease;
        padding: 0 4px;
        margin: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        border: 0;
    }

    .text-field label {
        position: absolute;
        padding: 0 4px;
        left: 14px;
        top: 50%;
        transform: translateY(-55%) scale(1);
        transform-origin: top left;
        font-size: 16px;
        color: #757575;
        pointer-events: none;
        transition: transform 0.2s ease, color 0.2s ease;
        background: transparent;
    }

    .text-field:focus-within label,
    .text-field input:not(:placeholder-shown) + label {
        left: 16px;
        transform: translateY(-143%) scale(0.75);
        color: rgba(250, 173, 23, 1);
    }

    .text-field:focus-within fieldset legend,
    .text-field input:not(:placeholder-shown) ~ fieldset legend {
        max-width: 100%;
        display: block;
        font-size: 12px;
    }

    .text-field:focus-within fieldset,
    .text-field input:not(:placeholder-shown) ~ fieldset {
        border-color: rgba(250, 173, 23, 1);
        border-width: 2px;
    }
</style>