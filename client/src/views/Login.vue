<template>
  <div class="login">
    <h1>Вход в Gymer</h1>
    <el-form
      style="max-width: 400px;position: relative;margin:0px auto;padding:20px;"
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
        <el-input type="password" v-model="controls.password" show-password></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm('controls')">Войти</el-button>
    </el-form>
  </div>
</template>

<script>
import { User } from "@/services/auth.service.js";

export default {
  data() {
    return {
      controls: {
        login: "",
        password: "",
      },
      rules: {
        login: [
          {
            min: 1,
            max: 40,
            required: true,
            message: "Введите логин",
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
            message: "Введите пароль",
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
          this.addUser();
        } else {
          return false;
        }
      });
    },

    async addUser() {
      let data = {
        login: this.controls.login,
        password: this.controls.password,
      };
      let response = await User.login(data);
      if (response.err) {
        this.$message({
          message: response.err,
          type: "warning",
        });
      } else {
        if (localStorage.getItem("jwt") != null) {
          if (this.$route.params.nextUrl != null) {
            this.$router.push(this.$route.params.nextUrl);
          } else {
            this.$router.push("/dashboard");
          }
        }
      }

    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  padding-bottom: 10px;
}
.login {
  padding-top: 100px;
}
.el-button {
  width: 100%;
}
</style>