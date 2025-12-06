# إعداد EmailJS لإرسال الإيميلات

## الخطوات المطلوبة:

### 1. تثبيت EmailJS
```bash
npm install @emailjs/browser
```

### 2. إنشاء حساب على EmailJS
- اذهبي لـ https://www.emailjs.com/
- أنشئي حساب جديد مجاناً

### 3. إعداد الخدمة (Service)
- في لوحة التحكم، اضغطي على "Add New Service"
- اختاري Gmail أو أي مزود إيميل تستخدميه
- اتبعي التعليمات لربط إيميلك

### 4. إنشاء Template
- اضغطي على "Create New Template"
- استخدمي هذا المحتوى:

**Subject:** New message from {{from_name}}

**Content (HTML):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>New message from {{from_name}}</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{from_email}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

### 5. الحصول على المفاتيح
- Service ID: من صفحة Services
- Template ID: من صفحة Templates  
- Public Key: من Account > API Keys

### 6. تحديث الكود
في ملف Contact.jsx، استبدلي:
- `YOUR_SERVICE_ID` بـ Service ID الخاص بك
- `YOUR_TEMPLATE_ID` بـ Template ID الخاص بك
- `YOUR_PUBLIC_KEY` بـ Public Key الخاص بك
- `nour.ibrahim@gmail.com` بإيميلك الحقيقي

### 7. اختبار الإرسال
بعد التحديث، جربي إرسال رسالة من الموقع وستوصلك على إيميلك!

## ملاحظة:
الخدمة مجانية لـ 200 إيميل شهرياً، وهذا كافي للاستخدام الشخصي.