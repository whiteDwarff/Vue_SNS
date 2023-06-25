<template>
  <div>
    <!-- 글작성페이지 -->
    <div class="upload-image"></div>
    <div class="write">
      <textarea class="write-box">write!</textarea>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>