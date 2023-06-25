<template>
  <div
    v-if="fileSubmit"
    class="w-100 h-100"
  >
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
  <div v-else class="w-100 h-100 outer-box">
    <div class="inner-box w-100 h-100">
      <div class="font-weight-bold submit">
        SUBMIT
      </div>
      <div class="drive-link-container">
        <label class="mt-auto mb-auto mr-2" for="drive-url-input">URL:</label>
        <b-input id="drive-url-input" v-model="driveLink" type="text" placeholder="Google drive link" class="drive-link" />
        <div class="btn ml-auto btn-primary" @click.prevent="submitDriveLink()">
          <div v-if="!loading">
            Submit
          </div>
          <b-spinner v-else small />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SubmitBox',
  props: {
    challengeName: {
      type: String,
      default: ''
    },
    phase: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      loading: false,
      hover: false,
      fileSubmit: false,
      driveLink: ''
    }
  },
  methods: {
    fileDrop (e) {
      this.$refs.fileInput.files = e.dataTransfer.files
      this.$forceUpdate()
    },
    file () {
      if (this.$refs.fileInput && this.$refs.fileInput.files && this.$refs.fileInput.files.length) {
        return this.$refs.fileInput.files[0]
      }
      return null
    },
    emptyFile () {
      this.$refs.fileInput.value = ''
    },
    submit () {
      this.loading = true

      const formData = new FormData()
      formData.append('file', this.file())
      this.$axios.post(
        '/' + this.challengeName + '/' + this.phase + '/submit/',
        formData,
        {
          headers: { Authorization: this.$store.state.token.token },
          'Content-Type': 'multipart/form-data'
        }).then((response) => {
        this.loading = false
        this.$emit('submitted')
        this.emptyFile()
        this.$bvToast.toast('File submitted.', {
          title: 'Submission',
          variant: 'success',
          autoHideDelay: 5000
        })
      })
        .catch((_) => {
          this.loading = false
          this.$bvToast.toast('Failed to submit file.', {
            title: 'Submission',
            variant: 'danger',
            autoHideDelay: 5000
          })
        })
    },
    submitDriveLink () {
      this.loading = true
      this.$axios.post(
        '/' + this.challengeName + '/' + this.phase + '/submit-drive/',
        { url: this.driveLink },
        { headers: { Authorization: this.$store.state.token.token } }
      )
        .then((response) => {
          this.loading = false
          this.$emit('submitted')
          this.driveLink = ''
          this.$bvToast.toast('Submitted using google drive.', {
            title: 'Submission',
            variant: 'success',
            autoHideDelay: 5000
          })
        })
        .catch((_) => {
          this.loading = false
          this.$bvToast.toast('Failed to submit using google drive. Check the link and permissions of the file.', {
            title: 'Submission',
            variant: 'danger',
            autoHideDelay: 10000
          })
        })
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

.drive-link-container {
  display: flex;
  flex-direction: row;
}

.drive-link {
  width: 50%;
}
</style>
