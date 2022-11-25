# 解释
## package.json
  `"type": "module"`: 定义规范使用，可选是module和commonjs， module就是ESM规范，commonjs就是NodeJs规范
  `publishConfig.access`: 表示当前项目发布到NPM的访问级别，有restricted和public两种选项，restricted是发布到NPM的私有包【需要收费的】，public是免费的，默认是restricted；

## tsconfig.json
{<br />
  "compilerOptions": { <br />
    /* Basic Options */<br />
    `"baseUrl": "."`, // 模块解析根路径，默认为 tsconfig.json 位于的目录<br />
    `"rootDir": "src"`, // 编译解析根路径，默认为 tsconfig.json 位于的目录<br />
   ` "target": "ESNEXT"`, // 指定输出 ECMAScript 版本，默认为 es5<br />
    `"module": "ESNext"`, // 指定输出模块规范，默认为 Commonjs<br />
    `"lib": ["ESNext", "DOM"],` // 编译需要包含的 API，默认为 target 的默认值<br />
    `"outDir": "dist", `// 编译输出文件夹路径，默认为源文件同级目录<br />
    `"sourceMap": true,` // 启用 sourceMap，默认为 false<br />
    `"declaration": true,` // 生成 .d.ts 类型文件，默认为 false<br />
    `"declarationDir": "dist/types"`, // .d.ts 类型文件的输出目录，默认为 outDir 目录<br />
    /* Strict Type-Checking Options */<br />
    `"strict": true,` // 启用所有严格的类型检查选项，默认为 true<br />
    `"esModuleInterop": true`, // 通过为导入内容创建命名空间，实现 CommonJS 和 ES 模块之间的互操作性，默认为 true<br />
    `"skipLibCheck": true,` // 跳过导入第三方 lib 声明文件的类型检查，默认为 true<br />
    `"forceConsistentCasingInFileNames": true` // 强制在文件名中使用一致的大小写，默认为 true<br />
    `"moduleResolution": "Node",` // 指定使用哪种模块解析策略，默认为 Classic<br />
  },
  `"include": ["src"] `// 指定需要编译文件，默认当前目录下除了 exclude 之外的所有.ts, .d.ts,.tsx 文件<br />
} 

## 

## 