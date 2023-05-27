<template>
  <div class="w-100 h-100">
    <label
      for="fileInput"
      class="w-100 h-100 outer-box"
      @drop.prevent="fileDrop"
      @dragenter.prevent="hover = true"
      @dragleave.prevent="hover = false"
      @dragover.prevent
    >
      <div class="inner-box w-100 h-100">
        <div class="font-weight-bold submit">
          SUBMIT
        </div>
        <div v-if="!Boolean(file())" class="font-weight-light content text-uppercase w-100 h-100">
          <div v-if="!hover">Drag and Drop your Answer OR CliCk to Choose It</div>
          <div v-else>Drop the file here</div>
        </div>
        <div v-else class="font-weight-light content text-uppercase w-100 h-100 d-flex flex-row align-items-baseline">
          <div>File {{ file().name }} selected</div>
          <div class="btn ml-auto btn-primary" @click.prevent="submit()">
            <div v-if="!loading">Submit</div>
            <b-spinner v-else small />
          </div>
        </div>
      </div>
    </label>
    <input
      id="fileInput"
      ref="fileInput"
      class="d-none"
      type="file"
      @change="$forceUpdate()"
    >
  </div>
</template>

<script>

export default {
  name: 'SubmitBox',
  data () {
    return {
      loading: false,
      hover: false
    }
  },
  methods: {
    fileDrop (e) {
      console.log(e.dataTransfer.files)
      this.$refs.fileInput.files = e.dataTransfer.files
      console.log(this.$refs.fileInput.files)
      this.$forceUpdate()
    },
    file () {
      if (this.$refs.fileInput && this.$refs.fileInput.files && this.$refs.fileInput.files.length) {
        return this.$refs.fileInput.files[0]
      }
      return null
    },
    submit () {
      this.loading = true
    }
  }
}
</script>

<style scoped>
.outer-box {
  border-radius: 22px;
  background: #D9D9D9;
  padding: 1%;
}

.inner-box {
  font-family: "Avenir Next LT Pro", sans-serif;
  border: 2px dashed black;
  border-radius: 22px;
  padding: 1%;
}

div.submit {
  font-size: 3rem;
  letter-spacing: 0.4rem;
}

div.content {
  font-size: 1rem;
  letter-spacing: 0.2rem;
}

div.btn {
  width: 10%;
  height: 20%;
}
</style>
