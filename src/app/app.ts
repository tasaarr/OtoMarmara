import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-box">
        <img src="assets/logo.png" alt="OtoMarmara Logo" class="logo" >
         <h3 class="small" style="text-align: center"> Kullanıcı Adın Ve Şifreni Gir Yok İse Müdürüne Sor</h3> 
        <div class="form-group">
            <label>Kullanıcı Adı:</label>
            <input type="text" [(ngModel)]="username" name="username" required>
          </div>
          <div class="form-group">
            <label>Şifre:</label>
            <input type="password" [(ngModel)]="password" name="password" required>
          </div>
          <button type="submit">Giriş Yap</button>
          <!-- <br>
          <br>
          <br>
          <button type="button">Kayıt Ol</button> -->
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
    
    .login-box {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 300px;
    }
    
    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }
    
    .logo {
      display: block;
      margin: 0 auto 20px auto;
      max-width: 150px;
      height: auto;
    }
    

    
    .form-group {
      margin-bottom: 15px;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      color: #555;
    }
    
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .small, small {
    font-size: 80%;
    font-weight: 400;
}
    
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class AppComponent {
  username = '';
  password = '';

}
