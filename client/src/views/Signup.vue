<template>
  <div class="login">
 <h1>Регистрация</h1>
      <el-form  style="max-width: 400px;position: relative;margin:0px auto;padding:20px;"
        :model="controls"
        :rules="rules"
        ref="controls"
        label-width="90px"
        label-position="left "
      >
        <el-form-item label="Логин" prop="login">
          <el-input v-model="controls.login"></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password">
          <el-input v-model="controls.password"></el-input>
        </el-form-item>

        <el-button type="primary" @click="submitForm('controls')">Добавить</el-button>
      </el-form>
  
  </div>
</template>

<script>
//import { Book } from "@/BookService.js";
export default {
  data() {
    return {
      controls: {
        login: "",
        password: "",
        genre: "",
      },
      rules: {
        login: [
          {
            min: 1,
            max: 40,
            required: true,
            message: "Пожалуйста введите логин",
            trigger: "change",
          },
          {
            min: 1,
            max: 40,
            message: "Длинна не должна превышать 40 символов",
            trigger: "change",
          },
        ],
        password: [
          {
            min: 1,
            max: 40,
            required: true,
            message: "Пожалуйста введите пароль",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addBook();
        } else {
          return false;
        }
      });
    },
    async addBook() {
      /*
      let data = {
        login: this.controls.login,
        password: this.controls.password,
        genre: this.controls.genre,
        img: this.controls.img,
      };
      await Book.addNewBook(data);
      */
      this.$message({
        message: "xxx",
        type: "success",
      });
    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  padding-bottom: 10px;
}
.login{
  padding-top: 100px;
}
.el-button{
  width:100%;
}

</style>