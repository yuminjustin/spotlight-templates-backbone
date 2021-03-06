module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "项目名称/ project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "项目描述/ description",
      "default": "A babckbone project"
    },
    "author": {
      "type": "string",
      "message": "作者/ author"
    }
  },
  "completeMessage": "开始你的项目:\n\n注：cnpm 安装将不兼容低版本IE\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n"
};
