(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"33yf":function(t,I,_){"use strict";(function(I){function _(t){if("string"!==typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function e(t,I){for(var _,e="",S=0,E=-1,A=0,i=0;i<=t.length;++i){if(i<t.length)_=t.charCodeAt(i);else{if(47===_)break;_=47}if(47===_){if(E===i-1||1===A);else if(E!==i-1&&2===A){if(e.length<2||2!==S||46!==e.charCodeAt(e.length-1)||46!==e.charCodeAt(e.length-2))if(e.length>2){var r=e.lastIndexOf("/");if(r!==e.length-1){-1===r?(e="",S=0):S=(e=e.slice(0,r)).length-1-e.lastIndexOf("/"),E=i,A=0;continue}}else if(2===e.length||1===e.length){e="",S=0,E=i,A=0;continue}I&&(e.length>0?e+="/..":e="..",S=2)}else e.length>0?e+="/"+t.slice(E+1,i):e=t.slice(E+1,i),S=i-E-1;E=i,A=0}else 46===_&&-1!==A?++A:A=-1}return e}var S={resolve:function(){for(var t,S="",E=!1,A=arguments.length-1;A>=-1&&!E;A--){var i;A>=0?i=arguments[A]:(void 0===t&&(t=I.cwd()),i=t),_(i),0!==i.length&&(S=i+"/"+S,E=47===i.charCodeAt(0))}return S=e(S,!E),E?S.length>0?"/"+S:"/":S.length>0?S:"."},normalize:function(t){if(_(t),0===t.length)return".";var I=47===t.charCodeAt(0),S=47===t.charCodeAt(t.length-1);return 0!==(t=e(t,!I)).length||I||(t="."),t.length>0&&S&&(t+="/"),I?"/"+t:t},isAbsolute:function(t){return _(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,I=0;I<arguments.length;++I){var e=arguments[I];_(e),e.length>0&&(void 0===t?t=e:t+="/"+e)}return void 0===t?".":S.normalize(t)},relative:function(t,I){if(_(t),_(I),t===I)return"";if((t=S.resolve(t))===(I=S.resolve(I)))return"";for(var e=1;e<t.length&&47===t.charCodeAt(e);++e);for(var E=t.length,A=E-e,i=1;i<I.length&&47===I.charCodeAt(i);++i);for(var r=I.length-i,n=A<r?A:r,T=-1,s=0;s<=n;++s){if(s===n){if(r>n){if(47===I.charCodeAt(i+s))return I.slice(i+s+1);if(0===s)return I.slice(i+s)}else A>n&&(47===t.charCodeAt(e+s)?T=s:0===s&&(T=0));break}var o=t.charCodeAt(e+s);if(o!==I.charCodeAt(i+s))break;47===o&&(T=s)}var l="";for(s=e+T+1;s<=E;++s)s!==E&&47!==t.charCodeAt(s)||(0===l.length?l+="..":l+="/..");return l.length>0?l+I.slice(i+T):(i+=T,47===I.charCodeAt(i)&&++i,I.slice(i))},_makeLong:function(t){return t},dirname:function(t){if(_(t),0===t.length)return".";for(var I=t.charCodeAt(0),e=47===I,S=-1,E=!0,A=t.length-1;A>=1;--A)if(47===(I=t.charCodeAt(A))){if(!E){S=A;break}}else E=!1;return-1===S?e?"/":".":e&&1===S?"//":t.slice(0,S)},basename:function(t,I){if(void 0!==I&&"string"!==typeof I)throw new TypeError('"ext" argument must be a string');_(t);var e,S=0,E=-1,A=!0;if(void 0!==I&&I.length>0&&I.length<=t.length){if(I.length===t.length&&I===t)return"";var i=I.length-1,r=-1;for(e=t.length-1;e>=0;--e){var n=t.charCodeAt(e);if(47===n){if(!A){S=e+1;break}}else-1===r&&(A=!1,r=e+1),i>=0&&(n===I.charCodeAt(i)?-1===--i&&(E=e):(i=-1,E=r))}return S===E?E=r:-1===E&&(E=t.length),t.slice(S,E)}for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!A){S=e+1;break}}else-1===E&&(A=!1,E=e+1);return-1===E?"":t.slice(S,E)},extname:function(t){_(t);for(var I=-1,e=0,S=-1,E=!0,A=0,i=t.length-1;i>=0;--i){var r=t.charCodeAt(i);if(47!==r)-1===S&&(E=!1,S=i+1),46===r?-1===I?I=i:1!==A&&(A=1):-1!==I&&(A=-1);else if(!E){e=i+1;break}}return-1===I||-1===S||0===A||1===A&&I===S-1&&I===e+1?"":t.slice(I,S)},format:function(t){if(null===t||"object"!==typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,I){var _=I.dir||I.root,e=I.base||(I.name||"")+(I.ext||"");return _?_===I.root?_+e:_+t+e:e}("/",t)},parse:function(t){_(t);var I={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return I;var e,S=t.charCodeAt(0),E=47===S;E?(I.root="/",e=1):e=0;for(var A=-1,i=0,r=-1,n=!0,T=t.length-1,s=0;T>=e;--T)if(47!==(S=t.charCodeAt(T)))-1===r&&(n=!1,r=T+1),46===S?-1===A?A=T:1!==s&&(s=1):-1!==A&&(s=-1);else if(!n){i=T+1;break}return-1===A||-1===r||0===s||1===s&&A===r-1&&A===i+1?-1!==r&&(I.base=I.name=0===i&&E?t.slice(1,r):t.slice(i,r)):(0===i&&E?(I.name=t.slice(1,A),I.base=t.slice(1,r)):(I.name=t.slice(i,A),I.base=t.slice(i,r)),I.ext=t.slice(A,r)),i>0?I.dir=t.slice(0,i-1):E&&(I.dir="/"),I},sep:"/",delimiter:":",win32:null,posix:null};S.posix=S,t.exports=S}).call(this,_("8oxB"))},"98P5":function(t,I,_){"use strict";(function(t){Object.defineProperty(I,"__esModule",{value:!0});const _="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof t?t:{};I.BigIntPolyfill="undefined"!==typeof BigInt?BigInt:_.BigInt||Number}).call(this,_("yLpj"))},Du9B:function(t,I,_){"use strict";(function(t){Object.defineProperty(I,"__esModule",{value:!0});const _=t;I.default=_}).call(this,_("HDXh").Buffer)},MqkW:function(t,I,_){"use strict";Object.defineProperty(I,"__esModule",{value:!0});const e=_("98P5");I.WASI_ESUCCESS=0,I.WASI_E2BIG=1,I.WASI_EACCES=2,I.WASI_EADDRINUSE=3,I.WASI_EADDRNOTAVAIL=4,I.WASI_EAFNOSUPPORT=5,I.WASI_EAGAIN=6,I.WASI_EALREADY=7,I.WASI_EBADF=8,I.WASI_EBADMSG=9,I.WASI_EBUSY=10,I.WASI_ECANCELED=11,I.WASI_ECHILD=12,I.WASI_ECONNABORTED=13,I.WASI_ECONNREFUSED=14,I.WASI_ECONNRESET=15,I.WASI_EDEADLK=16,I.WASI_EDESTADDRREQ=17,I.WASI_EDOM=18,I.WASI_EDQUOT=19,I.WASI_EEXIST=20,I.WASI_EFAULT=21,I.WASI_EFBIG=22,I.WASI_EHOSTUNREACH=23,I.WASI_EIDRM=24,I.WASI_EILSEQ=25,I.WASI_EINPROGRESS=26,I.WASI_EINTR=27,I.WASI_EINVAL=28,I.WASI_EIO=29,I.WASI_EISCONN=30,I.WASI_EISDIR=31,I.WASI_ELOOP=32,I.WASI_EMFILE=33,I.WASI_EMLINK=34,I.WASI_EMSGSIZE=35,I.WASI_EMULTIHOP=36,I.WASI_ENAMETOOLONG=37,I.WASI_ENETDOWN=38,I.WASI_ENETRESET=39,I.WASI_ENETUNREACH=40,I.WASI_ENFILE=41,I.WASI_ENOBUFS=42,I.WASI_ENODEV=43,I.WASI_ENOENT=44,I.WASI_ENOEXEC=45,I.WASI_ENOLCK=46,I.WASI_ENOLINK=47,I.WASI_ENOMEM=48,I.WASI_ENOMSG=49,I.WASI_ENOPROTOOPT=50,I.WASI_ENOSPC=51,I.WASI_ENOSYS=52,I.WASI_ENOTCONN=53,I.WASI_ENOTDIR=54,I.WASI_ENOTEMPTY=55,I.WASI_ENOTRECOVERABLE=56,I.WASI_ENOTSOCK=57,I.WASI_ENOTSUP=58,I.WASI_ENOTTY=59,I.WASI_ENXIO=60,I.WASI_EOVERFLOW=61,I.WASI_EOWNERDEAD=62,I.WASI_EPERM=63,I.WASI_EPIPE=64,I.WASI_EPROTO=65,I.WASI_EPROTONOSUPPORT=66,I.WASI_EPROTOTYPE=67,I.WASI_ERANGE=68,I.WASI_EROFS=69,I.WASI_ESPIPE=70,I.WASI_ESRCH=71,I.WASI_ESTALE=72,I.WASI_ETIMEDOUT=73,I.WASI_ETXTBSY=74,I.WASI_EXDEV=75,I.WASI_ENOTCAPABLE=76,I.WASI_SIGABRT=0,I.WASI_SIGALRM=1,I.WASI_SIGBUS=2,I.WASI_SIGCHLD=3,I.WASI_SIGCONT=4,I.WASI_SIGFPE=5,I.WASI_SIGHUP=6,I.WASI_SIGILL=7,I.WASI_SIGINT=8,I.WASI_SIGKILL=9,I.WASI_SIGPIPE=10,I.WASI_SIGQUIT=11,I.WASI_SIGSEGV=12,I.WASI_SIGSTOP=13,I.WASI_SIGTERM=14,I.WASI_SIGTRAP=15,I.WASI_SIGTSTP=16,I.WASI_SIGTTIN=17,I.WASI_SIGTTOU=18,I.WASI_SIGURG=19,I.WASI_SIGUSR1=20,I.WASI_SIGUSR2=21,I.WASI_SIGVTALRM=22,I.WASI_SIGXCPU=23,I.WASI_SIGXFSZ=24,I.WASI_FILETYPE_UNKNOWN=0,I.WASI_FILETYPE_BLOCK_DEVICE=1,I.WASI_FILETYPE_CHARACTER_DEVICE=2,I.WASI_FILETYPE_DIRECTORY=3,I.WASI_FILETYPE_REGULAR_FILE=4,I.WASI_FILETYPE_SOCKET_DGRAM=5,I.WASI_FILETYPE_SOCKET_STREAM=6,I.WASI_FILETYPE_SYMBOLIC_LINK=7,I.WASI_FDFLAG_APPEND=1,I.WASI_FDFLAG_DSYNC=2,I.WASI_FDFLAG_NONBLOCK=4,I.WASI_FDFLAG_RSYNC=8,I.WASI_FDFLAG_SYNC=16,I.WASI_RIGHT_FD_DATASYNC=e.BigIntPolyfill(1),I.WASI_RIGHT_FD_READ=e.BigIntPolyfill(2),I.WASI_RIGHT_FD_SEEK=e.BigIntPolyfill(4),I.WASI_RIGHT_FD_FDSTAT_SET_FLAGS=e.BigIntPolyfill(8),I.WASI_RIGHT_FD_SYNC=e.BigIntPolyfill(16),I.WASI_RIGHT_FD_TELL=e.BigIntPolyfill(32),I.WASI_RIGHT_FD_WRITE=e.BigIntPolyfill(64),I.WASI_RIGHT_FD_ADVISE=e.BigIntPolyfill(128),I.WASI_RIGHT_FD_ALLOCATE=e.BigIntPolyfill(256),I.WASI_RIGHT_PATH_CREATE_DIRECTORY=e.BigIntPolyfill(512),I.WASI_RIGHT_PATH_CREATE_FILE=e.BigIntPolyfill(1024),I.WASI_RIGHT_PATH_LINK_SOURCE=e.BigIntPolyfill(2048),I.WASI_RIGHT_PATH_LINK_TARGET=e.BigIntPolyfill(4096),I.WASI_RIGHT_PATH_OPEN=e.BigIntPolyfill(8192),I.WASI_RIGHT_FD_READDIR=e.BigIntPolyfill(16384),I.WASI_RIGHT_PATH_READLINK=e.BigIntPolyfill(32768),I.WASI_RIGHT_PATH_RENAME_SOURCE=e.BigIntPolyfill(65536),I.WASI_RIGHT_PATH_RENAME_TARGET=e.BigIntPolyfill(131072),I.WASI_RIGHT_PATH_FILESTAT_GET=e.BigIntPolyfill(262144),I.WASI_RIGHT_PATH_FILESTAT_SET_SIZE=e.BigIntPolyfill(524288),I.WASI_RIGHT_PATH_FILESTAT_SET_TIMES=e.BigIntPolyfill(1048576),I.WASI_RIGHT_FD_FILESTAT_GET=e.BigIntPolyfill(2097152),I.WASI_RIGHT_FD_FILESTAT_SET_SIZE=e.BigIntPolyfill(4194304),I.WASI_RIGHT_FD_FILESTAT_SET_TIMES=e.BigIntPolyfill(8388608),I.WASI_RIGHT_PATH_SYMLINK=e.BigIntPolyfill(16777216),I.WASI_RIGHT_PATH_REMOVE_DIRECTORY=e.BigIntPolyfill(33554432),I.WASI_RIGHT_PATH_UNLINK_FILE=e.BigIntPolyfill(67108864),I.WASI_RIGHT_POLL_FD_READWRITE=e.BigIntPolyfill(134217728),I.WASI_RIGHT_SOCK_SHUTDOWN=e.BigIntPolyfill(268435456),I.RIGHTS_ALL=I.WASI_RIGHT_FD_DATASYNC|I.WASI_RIGHT_FD_READ|I.WASI_RIGHT_FD_SEEK|I.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|I.WASI_RIGHT_FD_SYNC|I.WASI_RIGHT_FD_TELL|I.WASI_RIGHT_FD_WRITE|I.WASI_RIGHT_FD_ADVISE|I.WASI_RIGHT_FD_ALLOCATE|I.WASI_RIGHT_PATH_CREATE_DIRECTORY|I.WASI_RIGHT_PATH_CREATE_FILE|I.WASI_RIGHT_PATH_LINK_SOURCE|I.WASI_RIGHT_PATH_LINK_TARGET|I.WASI_RIGHT_PATH_OPEN|I.WASI_RIGHT_FD_READDIR|I.WASI_RIGHT_PATH_READLINK|I.WASI_RIGHT_PATH_RENAME_SOURCE|I.WASI_RIGHT_PATH_RENAME_TARGET|I.WASI_RIGHT_PATH_FILESTAT_GET|I.WASI_RIGHT_PATH_FILESTAT_SET_SIZE|I.WASI_RIGHT_PATH_FILESTAT_SET_TIMES|I.WASI_RIGHT_FD_FILESTAT_GET|I.WASI_RIGHT_FD_FILESTAT_SET_TIMES|I.WASI_RIGHT_FD_FILESTAT_SET_SIZE|I.WASI_RIGHT_PATH_SYMLINK|I.WASI_RIGHT_PATH_UNLINK_FILE|I.WASI_RIGHT_PATH_REMOVE_DIRECTORY|I.WASI_RIGHT_POLL_FD_READWRITE|I.WASI_RIGHT_SOCK_SHUTDOWN,I.RIGHTS_BLOCK_DEVICE_BASE=I.RIGHTS_ALL,I.RIGHTS_BLOCK_DEVICE_INHERITING=I.RIGHTS_ALL,I.RIGHTS_CHARACTER_DEVICE_BASE=I.RIGHTS_ALL,I.RIGHTS_CHARACTER_DEVICE_INHERITING=I.RIGHTS_ALL,I.RIGHTS_REGULAR_FILE_BASE=I.WASI_RIGHT_FD_DATASYNC|I.WASI_RIGHT_FD_READ|I.WASI_RIGHT_FD_SEEK|I.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|I.WASI_RIGHT_FD_SYNC|I.WASI_RIGHT_FD_TELL|I.WASI_RIGHT_FD_WRITE|I.WASI_RIGHT_FD_ADVISE|I.WASI_RIGHT_FD_ALLOCATE|I.WASI_RIGHT_FD_FILESTAT_GET|I.WASI_RIGHT_FD_FILESTAT_SET_SIZE|I.WASI_RIGHT_FD_FILESTAT_SET_TIMES|I.WASI_RIGHT_POLL_FD_READWRITE,I.RIGHTS_REGULAR_FILE_INHERITING=e.BigIntPolyfill(0),I.RIGHTS_DIRECTORY_BASE=I.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|I.WASI_RIGHT_FD_SYNC|I.WASI_RIGHT_FD_ADVISE|I.WASI_RIGHT_PATH_CREATE_DIRECTORY|I.WASI_RIGHT_PATH_CREATE_FILE|I.WASI_RIGHT_PATH_LINK_SOURCE|I.WASI_RIGHT_PATH_LINK_TARGET|I.WASI_RIGHT_PATH_OPEN|I.WASI_RIGHT_FD_READDIR|I.WASI_RIGHT_PATH_READLINK|I.WASI_RIGHT_PATH_RENAME_SOURCE|I.WASI_RIGHT_PATH_RENAME_TARGET|I.WASI_RIGHT_PATH_FILESTAT_GET|I.WASI_RIGHT_PATH_FILESTAT_SET_SIZE|I.WASI_RIGHT_PATH_FILESTAT_SET_TIMES|I.WASI_RIGHT_FD_FILESTAT_GET|I.WASI_RIGHT_FD_FILESTAT_SET_TIMES|I.WASI_RIGHT_PATH_SYMLINK|I.WASI_RIGHT_PATH_UNLINK_FILE|I.WASI_RIGHT_PATH_REMOVE_DIRECTORY|I.WASI_RIGHT_POLL_FD_READWRITE,I.RIGHTS_DIRECTORY_INHERITING=I.RIGHTS_DIRECTORY_BASE|I.RIGHTS_REGULAR_FILE_BASE,I.RIGHTS_SOCKET_BASE=I.WASI_RIGHT_FD_READ|I.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|I.WASI_RIGHT_FD_WRITE|I.WASI_RIGHT_FD_FILESTAT_GET|I.WASI_RIGHT_POLL_FD_READWRITE|I.WASI_RIGHT_SOCK_SHUTDOWN,I.RIGHTS_SOCKET_INHERITING=I.RIGHTS_ALL,I.RIGHTS_TTY_BASE=I.WASI_RIGHT_FD_READ|I.WASI_RIGHT_FD_FDSTAT_SET_FLAGS|I.WASI_RIGHT_FD_WRITE|I.WASI_RIGHT_FD_FILESTAT_GET|I.WASI_RIGHT_POLL_FD_READWRITE,I.RIGHTS_TTY_INHERITING=e.BigIntPolyfill(0),I.WASI_CLOCK_REALTIME=0,I.WASI_CLOCK_MONOTONIC=1,I.WASI_CLOCK_PROCESS_CPUTIME_ID=2,I.WASI_CLOCK_THREAD_CPUTIME_ID=3,I.WASI_EVENTTYPE_CLOCK=0,I.WASI_EVENTTYPE_FD_READ=1,I.WASI_EVENTTYPE_FD_WRITE=2,I.WASI_FILESTAT_SET_ATIM=1,I.WASI_FILESTAT_SET_ATIM_NOW=2,I.WASI_FILESTAT_SET_MTIM=4,I.WASI_FILESTAT_SET_MTIM_NOW=8,I.WASI_O_CREAT=1,I.WASI_O_DIRECTORY=2,I.WASI_O_EXCL=4,I.WASI_O_TRUNC=8,I.WASI_PREOPENTYPE_DIR=0,I.WASI_DIRCOOKIE_START=0,I.WASI_STDIN_FILENO=0,I.WASI_STDOUT_FILENO=1,I.WASI_STDERR_FILENO=2,I.WASI_WHENCE_SET=0,I.WASI_WHENCE_CUR=1,I.WASI_WHENCE_END=2,I.ERROR_MAP={E2BIG:I.WASI_E2BIG,EACCES:I.WASI_EACCES,EADDRINUSE:I.WASI_EADDRINUSE,EADDRNOTAVAIL:I.WASI_EADDRNOTAVAIL,EAFNOSUPPORT:I.WASI_EAFNOSUPPORT,EALREADY:I.WASI_EALREADY,EAGAIN:I.WASI_EAGAIN,EBADF:I.WASI_EBADF,EBADMSG:I.WASI_EBADMSG,EBUSY:I.WASI_EBUSY,ECANCELED:I.WASI_ECANCELED,ECHILD:I.WASI_ECHILD,ECONNABORTED:I.WASI_ECONNABORTED,ECONNREFUSED:I.WASI_ECONNREFUSED,ECONNRESET:I.WASI_ECONNRESET,EDEADLOCK:I.WASI_EDEADLK,EDESTADDRREQ:I.WASI_EDESTADDRREQ,EDOM:I.WASI_EDOM,EDQUOT:I.WASI_EDQUOT,EEXIST:I.WASI_EEXIST,EFAULT:I.WASI_EFAULT,EFBIG:I.WASI_EFBIG,EHOSTDOWN:I.WASI_EHOSTUNREACH,EHOSTUNREACH:I.WASI_EHOSTUNREACH,EIDRM:I.WASI_EIDRM,EILSEQ:I.WASI_EILSEQ,EINPROGRESS:I.WASI_EINPROGRESS,EINTR:I.WASI_EINTR,EINVAL:I.WASI_EINVAL,EIO:I.WASI_EIO,EISCONN:I.WASI_EISCONN,EISDIR:I.WASI_EISDIR,ELOOP:I.WASI_ELOOP,EMFILE:I.WASI_EMFILE,EMLINK:I.WASI_EMLINK,EMSGSIZE:I.WASI_EMSGSIZE,EMULTIHOP:I.WASI_EMULTIHOP,ENAMETOOLONG:I.WASI_ENAMETOOLONG,ENETDOWN:I.WASI_ENETDOWN,ENETRESET:I.WASI_ENETRESET,ENETUNREACH:I.WASI_ENETUNREACH,ENFILE:I.WASI_ENFILE,ENOBUFS:I.WASI_ENOBUFS,ENODEV:I.WASI_ENODEV,ENOENT:I.WASI_ENOENT,ENOEXEC:I.WASI_ENOEXEC,ENOLCK:I.WASI_ENOLCK,ENOLINK:I.WASI_ENOLINK,ENOMEM:I.WASI_ENOMEM,ENOMSG:I.WASI_ENOMSG,ENOPROTOOPT:I.WASI_ENOPROTOOPT,ENOSPC:I.WASI_ENOSPC,ENOSYS:I.WASI_ENOSYS,ENOTCONN:I.WASI_ENOTCONN,ENOTDIR:I.WASI_ENOTDIR,ENOTEMPTY:I.WASI_ENOTEMPTY,ENOTRECOVERABLE:I.WASI_ENOTRECOVERABLE,ENOTSOCK:I.WASI_ENOTSOCK,ENOTTY:I.WASI_ENOTTY,ENXIO:I.WASI_ENXIO,EOVERFLOW:I.WASI_EOVERFLOW,EOWNERDEAD:I.WASI_EOWNERDEAD,EPERM:I.WASI_EPERM,EPIPE:I.WASI_EPIPE,EPROTO:I.WASI_EPROTO,EPROTONOSUPPORT:I.WASI_EPROTONOSUPPORT,EPROTOTYPE:I.WASI_EPROTOTYPE,ERANGE:I.WASI_ERANGE,EROFS:I.WASI_EROFS,ESPIPE:I.WASI_ESPIPE,ESRCH:I.WASI_ESRCH,ESTALE:I.WASI_ESTALE,ETIMEDOUT:I.WASI_ETIMEDOUT,ETXTBSY:I.WASI_ETXTBSY,EXDEV:I.WASI_EXDEV},I.SIGNAL_MAP={[I.WASI_SIGHUP]:"SIGHUP",[I.WASI_SIGINT]:"SIGINT",[I.WASI_SIGQUIT]:"SIGQUIT",[I.WASI_SIGILL]:"SIGILL",[I.WASI_SIGTRAP]:"SIGTRAP",[I.WASI_SIGABRT]:"SIGABRT",[I.WASI_SIGBUS]:"SIGBUS",[I.WASI_SIGFPE]:"SIGFPE",[I.WASI_SIGKILL]:"SIGKILL",[I.WASI_SIGUSR1]:"SIGUSR1",[I.WASI_SIGSEGV]:"SIGSEGV",[I.WASI_SIGUSR2]:"SIGUSR2",[I.WASI_SIGPIPE]:"SIGPIPE",[I.WASI_SIGALRM]:"SIGALRM",[I.WASI_SIGTERM]:"SIGTERM",[I.WASI_SIGCHLD]:"SIGCHLD",[I.WASI_SIGCONT]:"SIGCONT",[I.WASI_SIGSTOP]:"SIGSTOP",[I.WASI_SIGTSTP]:"SIGTSTP",[I.WASI_SIGTTIN]:"SIGTTIN",[I.WASI_SIGTTOU]:"SIGTTOU",[I.WASI_SIGURG]:"SIGURG",[I.WASI_SIGXCPU]:"SIGXCPU",[I.WASI_SIGXFSZ]:"SIGXFSZ",[I.WASI_SIGVTALRM]:"SIGVTALRM"}},P442:function(t,I,_){"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.default=t=>I=>{const _=t(I);return 1e9*_[0]+_[1]}},c6vl:function(t,I,_){"use strict";Object.defineProperty(I,"__esModule",{value:!0});const e=_("dcwN"),S=_("ct/t"),E=_("33yf"),A=_("g73s"),i={hrtime:_("P442").default(S.default),exit:t=>{throw new A.WASIExitError(t)},kill:t=>{throw new A.WASIKillError(t)},randomFillSync:e.randomFillSync,isTTY:()=>!0,path:E,fs:null};I.default=i},"ct/t":function(t,I,_){"use strict";Object.defineProperty(I,"__esModule",{value:!0});const e=Math.floor(.001*(Date.now()-performance.now()));I.default=function(t){let I=.001*performance.now(),_=Math.floor(I)+e,S=Math.floor(I%1*1e9);return t&&(_-=t[0],S-=t[1],S<0&&(_--,S+=1e9)),[_,S]}},dcwN:function(t,I,_){"use strict";(function(t,e){function S(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}var E=_("hwdV"),A=(_("Edxu"),E.Buffer),i=E.kMaxLength,r=t.crypto||t.msCrypto,n=Math.pow(2,32)-1;function T(t,I){if("number"!==typeof t||t!==t)throw new TypeError("offset must be a number");if(t>n||t<0)throw new TypeError("offset must be a uint32");if(t>i||t>I)throw new RangeError("offset out of range")}function s(t,I,_){if("number"!==typeof t||t!==t)throw new TypeError("size must be a number");if(t>n||t<0)throw new TypeError("size must be a uint32");if(t+I>_||t>i)throw new RangeError("buffer too small")}function o(t,I,_,S){var E=t.buffer,A=new Uint8Array(E,I,_);return r.getRandomValues(A),S?void e.nextTick((function(){S(null,t)})):t}r&&r.getRandomValues?(I.randomFill=function(I,_,e,S){if(!A.isBuffer(I)&&!(I instanceof t.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');if("function"===typeof _)S=_,_=0,e=I.length;else if("function"===typeof e)S=e,e=I.length-_;else if("function"!==typeof S)throw new TypeError('"cb" argument must be a function');return T(_,I.length),s(e,_,I.length),o(I,_,e,S)},I.randomFillSync=function(I,_,e){"undefined"===typeof _&&(_=0);if(!A.isBuffer(I)&&!(I instanceof t.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');T(_,I.length),void 0===e&&(e=I.length-_);return s(e,_,I.length),o(I,_,e)}):(I.randomFill=S,I.randomFillSync=S)}).call(this,_("yLpj"),_("8oxB"))},g73s:function(t,I,_){"use strict";Object.defineProperty(I,"__esModule",{value:!0});const e=_("98P5"),S=_("jg5z"),E=_("Du9B");const A=_("MqkW"),i=A.WASI_RIGHT_FD_DATASYNC|A.WASI_RIGHT_FD_READ|A.WASI_RIGHT_FD_SYNC|A.WASI_RIGHT_FD_ADVISE|A.WASI_RIGHT_FD_FILESTAT_GET|A.WASI_RIGHT_POLL_FD_READWRITE,r=A.WASI_RIGHT_FD_DATASYNC|A.WASI_RIGHT_FD_WRITE|A.WASI_RIGHT_FD_SYNC|A.WASI_RIGHT_FD_ADVISE|A.WASI_RIGHT_FD_FILESTAT_GET|A.WASI_RIGHT_POLL_FD_READWRITE,n=r,T=t=>{const I=Math.trunc(t),_=e.BigIntPolyfill(Math.round(1e6*(t-I)));return e.BigIntPolyfill(I)*e.BigIntPolyfill(1e6)+_},s=t=>{"number"===typeof t&&(t=Math.trunc(t));const I=e.BigIntPolyfill(t);return Number(I/e.BigIntPolyfill(1e6))},o=t=>(...I)=>{try{return t(...I)}catch(_){if(_&&_.code&&"string"===typeof _.code)return A.ERROR_MAP[_.code]||A.WASI_EINVAL;if(_ instanceof R)return _.errno;throw _}},l=(t,I)=>{const _=t.FD_MAP.get(I);if(!_)throw new R(A.WASI_EBADF);if(void 0===_.filetype){const e=t.bindings.fs.fstatSync(_.real),{filetype:S,rightsBase:E,rightsInheriting:A}=W(t,I,e);_.filetype=S,_.rights||(_.rights={base:E,inheriting:A})}return _},W=(t,I,_)=>{switch(!0){case _.isBlockDevice():return{filetype:A.WASI_FILETYPE_BLOCK_DEVICE,rightsBase:A.RIGHTS_BLOCK_DEVICE_BASE,rightsInheriting:A.RIGHTS_BLOCK_DEVICE_INHERITING};case _.isCharacterDevice():{const _=A.WASI_FILETYPE_CHARACTER_DEVICE;return void 0!==I&&t.bindings.isTTY(I)?{filetype:_,rightsBase:A.RIGHTS_TTY_BASE,rightsInheriting:A.RIGHTS_TTY_INHERITING}:{filetype:_,rightsBase:A.RIGHTS_CHARACTER_DEVICE_BASE,rightsInheriting:A.RIGHTS_CHARACTER_DEVICE_INHERITING}}case _.isDirectory():return{filetype:A.WASI_FILETYPE_DIRECTORY,rightsBase:A.RIGHTS_DIRECTORY_BASE,rightsInheriting:A.RIGHTS_DIRECTORY_INHERITING};case _.isFIFO():return{filetype:A.WASI_FILETYPE_SOCKET_STREAM,rightsBase:A.RIGHTS_SOCKET_BASE,rightsInheriting:A.RIGHTS_SOCKET_INHERITING};case _.isFile():return{filetype:A.WASI_FILETYPE_REGULAR_FILE,rightsBase:A.RIGHTS_REGULAR_FILE_BASE,rightsInheriting:A.RIGHTS_REGULAR_FILE_INHERITING};case _.isSocket():return{filetype:A.WASI_FILETYPE_SOCKET_STREAM,rightsBase:A.RIGHTS_SOCKET_BASE,rightsInheriting:A.RIGHTS_SOCKET_INHERITING};case _.isSymbolicLink():return{filetype:A.WASI_FILETYPE_SYMBOLIC_LINK,rightsBase:e.BigIntPolyfill(0),rightsInheriting:e.BigIntPolyfill(0)};default:return{filetype:A.WASI_FILETYPE_UNKNOWN,rightsBase:e.BigIntPolyfill(0),rightsInheriting:e.BigIntPolyfill(0)}}};class R extends Error{constructor(t){super(),this.errno=t,Object.setPrototypeOf(this,R.prototype)}}I.WASIError=R;class f extends Error{constructor(t){super("WASI Exit error: "+t),this.code=t,Object.setPrototypeOf(this,f.prototype)}}I.WASIExitError=f;class a extends Error{constructor(t){super("WASI Kill signal: "+t),this.signal=t,Object.setPrototypeOf(this,a.prototype)}}I.WASIKillError=a;class h{constructor(t){let I={};t&&t.preopens?I=t.preopens:t&&t.preopenDirectories&&(I=t.preopenDirectories);let _={};t&&t.env&&(_=t.env);let S=[];t&&t.args&&(S=t.args);let f=undefined;t&&t.bindings&&(f=t.bindings),this.memory=void 0,this.view=void 0,this.bindings=f,this.FD_MAP=new Map([[A.WASI_STDIN_FILENO,{real:0,filetype:A.WASI_FILETYPE_CHARACTER_DEVICE,rights:{base:i,inheriting:e.BigIntPolyfill(0)},path:void 0}],[A.WASI_STDOUT_FILENO,{real:1,filetype:A.WASI_FILETYPE_CHARACTER_DEVICE,rights:{base:r,inheriting:e.BigIntPolyfill(0)},path:void 0}],[A.WASI_STDERR_FILENO,{real:2,filetype:A.WASI_FILETYPE_CHARACTER_DEVICE,rights:{base:n,inheriting:e.BigIntPolyfill(0)},path:void 0}]]);let a=this.bindings.fs,h=this.bindings.path;for(const[e,E]of Object.entries(I)){const t=a.openSync(E,a.constants.O_RDONLY),I=[...this.FD_MAP.keys()].reverse()[0]+1;this.FD_MAP.set(I,{real:t,filetype:A.WASI_FILETYPE_DIRECTORY,rights:{base:A.RIGHTS_DIRECTORY_BASE,inheriting:A.RIGHTS_DIRECTORY_INHERITING},fakePath:e,path:E})}const c=(t,I)=>{this.refreshMemory();return Array.from({length:I},(I,_)=>{const e=t+8*_,S=this.view.getUint32(e,!0),E=this.view.getUint32(e+4,!0);return new Uint8Array(this.memory.buffer,S,E)})},O=(t,I)=>{const _=l(this,t);if(I!==e.BigIntPolyfill(0)&&(_.rights.base&I)===e.BigIntPolyfill(0))throw new R(A.WASI_EPERM);return _},N=f.hrtime(),C=t=>{switch(t){case A.WASI_CLOCK_MONOTONIC:return f.hrtime();case A.WASI_CLOCK_REALTIME:return T(Date.now());case A.WASI_CLOCK_PROCESS_CPUTIME_ID:case A.WASI_CLOCK_THREAD_CPUTIME_ID:return f.hrtime()-N;default:return null}};this.wasiImport={args_get:(t,I)=>{this.refreshMemory();let _=t,e=I;return S.forEach(t=>{this.view.setUint32(_,e,!0),_+=4,e+=E.default.from(this.memory.buffer).write(t+"\0",e)}),A.WASI_ESUCCESS},args_sizes_get:(t,I)=>{this.refreshMemory(),this.view.setUint32(t,S.length,!0);const _=S.reduce((t,I)=>t+E.default.byteLength(I)+1,0);return this.view.setUint32(I,_,!0),A.WASI_ESUCCESS},environ_get:(t,I)=>{this.refreshMemory();let e=t,S=I;return Object.entries(_).forEach(([t,I])=>{this.view.setUint32(e,S,!0),e+=4,S+=E.default.from(this.memory.buffer).write(`${t}=${I}\0`,S)}),A.WASI_ESUCCESS},environ_sizes_get:(t,I)=>{this.refreshMemory();const e=Object.entries(_).map(([t,I])=>`${t}=${I}\0`),S=e.reduce((t,I)=>t+E.default.byteLength(I),0);return this.view.setUint32(t,e.length,!0),this.view.setUint32(I,S,!0),A.WASI_ESUCCESS},clock_res_get:(t,I)=>{let _;switch(t){case A.WASI_CLOCK_MONOTONIC:case A.WASI_CLOCK_PROCESS_CPUTIME_ID:case A.WASI_CLOCK_THREAD_CPUTIME_ID:_=e.BigIntPolyfill(1);break;case A.WASI_CLOCK_REALTIME:_=e.BigIntPolyfill(1e3)}return this.view.setBigUint64(I,_),A.WASI_ESUCCESS},clock_time_get:(t,I,_)=>{this.refreshMemory();const S=C(t);return null===S?A.WASI_EINVAL:(this.view.setBigUint64(_,e.BigIntPolyfill(S),!0),A.WASI_ESUCCESS)},fd_advise:o((t,I,_,e)=>(O(t,A.WASI_RIGHT_FD_ADVISE),A.WASI_ENOSYS)),fd_allocate:o((t,I,_)=>(O(t,A.WASI_RIGHT_FD_ALLOCATE),A.WASI_ENOSYS)),fd_close:o(t=>{const I=O(t,e.BigIntPolyfill(0));return a.closeSync(I.real),this.FD_MAP.delete(t),A.WASI_ESUCCESS}),fd_datasync:o(t=>{const I=O(t,A.WASI_RIGHT_FD_DATASYNC);return a.fdatasyncSync(I.real),A.WASI_ESUCCESS}),fd_fdstat_get:o((t,I)=>{const _=O(t,e.BigIntPolyfill(0));return this.refreshMemory(),this.view.setUint8(I,_.filetype),this.view.setUint16(I+2,0,!0),this.view.setUint16(I+4,0,!0),this.view.setBigUint64(I+8,e.BigIntPolyfill(_.rights.base),!0),this.view.setBigUint64(I+8+8,e.BigIntPolyfill(_.rights.inheriting),!0),A.WASI_ESUCCESS}),fd_fdstat_set_flags:o((t,I)=>(O(t,A.WASI_RIGHT_FD_FDSTAT_SET_FLAGS),A.WASI_ENOSYS)),fd_fdstat_set_rights:o((t,I,_)=>{const S=O(t,e.BigIntPolyfill(0));if((S.rights.base|I)>S.rights.base)return A.WASI_EPERM;return(S.rights.inheriting|_)>S.rights.inheriting?A.WASI_EPERM:(S.rights.base=I,S.rights.inheriting=_,A.WASI_ESUCCESS)}),fd_filestat_get:o((t,I)=>{const _=O(t,A.WASI_RIGHT_FD_FILESTAT_GET),S=a.fstatSync(_.real);return this.refreshMemory(),this.view.setBigUint64(I,e.BigIntPolyfill(S.dev),!0),I+=8,this.view.setBigUint64(I,e.BigIntPolyfill(S.ino),!0),I+=8,this.view.setUint8(I,_.filetype),I+=8,this.view.setBigUint64(I,e.BigIntPolyfill(S.nlink),!0),I+=8,this.view.setBigUint64(I,e.BigIntPolyfill(S.size),!0),I+=8,this.view.setBigUint64(I,T(S.atimeMs),!0),I+=8,this.view.setBigUint64(I,T(S.mtimeMs),!0),I+=8,this.view.setBigUint64(I,T(S.ctimeMs),!0),A.WASI_ESUCCESS}),fd_filestat_set_size:o((t,I)=>{const _=O(t,A.WASI_RIGHT_FD_FILESTAT_SET_SIZE);return a.ftruncateSync(_.real,Number(I)),A.WASI_ESUCCESS}),fd_filestat_set_times:o((t,I,_,e)=>{const S=O(t,A.WASI_RIGHT_FD_FILESTAT_SET_TIMES),E=a.fstatSync(S.real);let i=E.atime,r=E.mtime;const n=s(C(A.WASI_CLOCK_REALTIME)),T=A.WASI_FILESTAT_SET_ATIM|A.WASI_FILESTAT_SET_ATIM_NOW;if((e&T)===T)return A.WASI_EINVAL;const o=A.WASI_FILESTAT_SET_MTIM|A.WASI_FILESTAT_SET_MTIM_NOW;return(e&o)===o?A.WASI_EINVAL:((e&A.WASI_FILESTAT_SET_ATIM)===A.WASI_FILESTAT_SET_ATIM?i=s(I):(e&A.WASI_FILESTAT_SET_ATIM_NOW)===A.WASI_FILESTAT_SET_ATIM_NOW&&(i=n),(e&A.WASI_FILESTAT_SET_MTIM)===A.WASI_FILESTAT_SET_MTIM?r=s(_):(e&A.WASI_FILESTAT_SET_MTIM_NOW)===A.WASI_FILESTAT_SET_MTIM_NOW&&(r=n),a.futimesSync(S.real,new Date(i),new Date(r)),A.WASI_ESUCCESS)}),fd_prestat_get:o((t,I)=>{const _=O(t,e.BigIntPolyfill(0));return _.path?(this.refreshMemory(),this.view.setUint8(I,A.WASI_PREOPENTYPE_DIR),this.view.setUint32(I+4,E.default.byteLength(_.fakePath),!0),A.WASI_ESUCCESS):A.WASI_EINVAL}),fd_prestat_dir_name:o((t,I,_)=>{const S=O(t,e.BigIntPolyfill(0));return S.path?(this.refreshMemory(),E.default.from(this.memory.buffer).write(S.fakePath,I,_,"utf8"),A.WASI_ESUCCESS):A.WASI_EINVAL}),fd_pwrite:o((t,I,_,e,S)=>{const E=O(t,A.WASI_RIGHT_FD_WRITE|A.WASI_RIGHT_FD_SEEK);let i=0;return c(I,_).forEach(t=>{let I=0;for(;I<t.byteLength;)I+=a.writeSync(E.real,t,I,t.byteLength-I,Number(e)+i+I);i+=I}),this.view.setUint32(S,i,!0),A.WASI_ESUCCESS}),fd_write:o((t,I,_,S)=>{const E=O(t,A.WASI_RIGHT_FD_WRITE);let i=0;return c(I,_).forEach(t=>{let I=0;for(;I<t.byteLength;){const _=a.writeSync(E.real,t,I,t.byteLength-I,E.offset?Number(E.offset):null);E.offset&&(E.offset+=e.BigIntPolyfill(_)),I+=_}i+=I}),this.view.setUint32(S,i,!0),A.WASI_ESUCCESS}),fd_pread:o((t,I,_,e,S)=>{const E=O(t,A.WASI_RIGHT_FD_READ|A.WASI_RIGHT_FD_SEEK);let i=0;t:for(const A of c(I,_)){let t=0;for(;t<A.byteLength;){const I=A.byteLength-t,_=a.readSync(E.real,A,t,A.byteLength-t,Number(e)+i+t);if(t+=_,i+=_,0===_||_<I)break t}i+=t}return this.view.setUint32(S,i,!0),A.WASI_ESUCCESS}),fd_read:o((t,I,_,S)=>{const E=O(t,A.WASI_RIGHT_FD_READ),i=0===E.real;let r=0;t:for(const A of c(I,_)){let t=0;for(;t<A.byteLength;){let I=A.byteLength-t,_=i||void 0===E.offset?null:Number(E.offset),S=a.readSync(E.real,A,t,I,_);if(i||(E.offset=(E.offset?E.offset:e.BigIntPolyfill(0))+e.BigIntPolyfill(S)),t+=S,r+=S,0===S||S<I)break t}}return this.view.setUint32(S,r,!0),A.WASI_ESUCCESS}),fd_readdir:o((t,I,_,S,i)=>{const r=O(t,A.WASI_RIGHT_FD_READDIR);this.refreshMemory();const n=a.readdirSync(r.path,{withFileTypes:!0}),T=I;for(let o=Number(S);o<n.length;o+=1){const t=n[o];let S=E.default.byteLength(t.name);if(I-T>_)break;if(this.view.setBigUint64(I,e.BigIntPolyfill(o+1),!0),(I+=8)-T>_)break;const i=a.statSync(h.resolve(r.path,t.name));if(this.view.setBigUint64(I,e.BigIntPolyfill(i.ino),!0),(I+=8)-T>_)break;if(this.view.setUint32(I,S,!0),(I+=4)-T>_)break;let s;switch(!0){case i.isBlockDevice():s=A.WASI_FILETYPE_BLOCK_DEVICE;break;case i.isCharacterDevice():s=A.WASI_FILETYPE_CHARACTER_DEVICE;break;case i.isDirectory():s=A.WASI_FILETYPE_DIRECTORY;break;case i.isFIFO():s=A.WASI_FILETYPE_SOCKET_STREAM;break;case i.isFile():s=A.WASI_FILETYPE_REGULAR_FILE;break;case i.isSocket():s=A.WASI_FILETYPE_SOCKET_STREAM;break;case i.isSymbolicLink():s=A.WASI_FILETYPE_SYMBOLIC_LINK;break;default:s=A.WASI_FILETYPE_UNKNOWN}if(this.view.setUint8(I,s),I+=1,(I+=3)+S>=T+_)break;E.default.from(this.memory.buffer).write(t.name,I),I+=S}const s=I-T;return this.view.setUint32(i,Math.min(s,_),!0),A.WASI_ESUCCESS}),fd_renumber:o((t,I)=>(O(t,e.BigIntPolyfill(0)),O(I,e.BigIntPolyfill(0)),a.closeSync(this.FD_MAP.get(t).real),this.FD_MAP.set(t,this.FD_MAP.get(I)),this.FD_MAP.delete(I),A.WASI_ESUCCESS)),fd_seek:o((t,I,_,S)=>{const E=O(t,A.WASI_RIGHT_FD_SEEK);switch(this.refreshMemory(),_){case A.WASI_WHENCE_CUR:E.offset=(E.offset?E.offset:e.BigIntPolyfill(0))+e.BigIntPolyfill(I);break;case A.WASI_WHENCE_END:const{size:t}=a.fstatSync(E.real);E.offset=e.BigIntPolyfill(t)+e.BigIntPolyfill(I);break;case A.WASI_WHENCE_SET:E.offset=e.BigIntPolyfill(I)}return this.view.setBigUint64(S,E.offset,!0),A.WASI_ESUCCESS}),fd_tell:o((t,I)=>{const _=O(t,A.WASI_RIGHT_FD_TELL);return this.refreshMemory(),_.offset||(_.offset=e.BigIntPolyfill(0)),this.view.setBigUint64(I,_.offset,!0),A.WASI_ESUCCESS}),fd_sync:o(t=>{const I=O(t,A.WASI_RIGHT_FD_SYNC);return a.fsyncSync(I.real),A.WASI_ESUCCESS}),path_create_directory:o((t,I,_)=>{const e=O(t,A.WASI_RIGHT_PATH_CREATE_DIRECTORY);if(!e.path)return A.WASI_EINVAL;this.refreshMemory();const S=E.default.from(this.memory.buffer,I,_).toString();return a.mkdirSync(h.resolve(e.path,S)),A.WASI_ESUCCESS}),path_filestat_get:o((t,I,_,S,i)=>{const r=O(t,A.WASI_RIGHT_PATH_FILESTAT_GET);if(!r.path)return A.WASI_EINVAL;this.refreshMemory();const n=E.default.from(this.memory.buffer,_,S).toString(),s=a.statSync(h.resolve(r.path,n));return this.view.setBigUint64(i,e.BigIntPolyfill(s.dev),!0),i+=8,this.view.setBigUint64(i,e.BigIntPolyfill(s.ino),!0),i+=8,this.view.setUint8(i,W(this,void 0,s).filetype),i+=8,this.view.setBigUint64(i,e.BigIntPolyfill(s.nlink),!0),i+=8,this.view.setBigUint64(i,e.BigIntPolyfill(s.size),!0),i+=8,this.view.setBigUint64(i,T(s.atimeMs),!0),i+=8,this.view.setBigUint64(i,T(s.mtimeMs),!0),i+=8,this.view.setBigUint64(i,T(s.ctimeMs),!0),A.WASI_ESUCCESS}),path_filestat_set_times:o((t,I,_,e,S,i,r)=>{const n=O(t,A.WASI_RIGHT_PATH_FILESTAT_SET_TIMES);if(!n.path)return A.WASI_EINVAL;this.refreshMemory();const T=a.fstatSync(n.real);let o=T.atime,l=T.mtime;const W=s(C(A.WASI_CLOCK_REALTIME)),R=A.WASI_FILESTAT_SET_ATIM|A.WASI_FILESTAT_SET_ATIM_NOW;if((r&R)===R)return A.WASI_EINVAL;const f=A.WASI_FILESTAT_SET_MTIM|A.WASI_FILESTAT_SET_MTIM_NOW;if((r&f)===f)return A.WASI_EINVAL;(r&A.WASI_FILESTAT_SET_ATIM)===A.WASI_FILESTAT_SET_ATIM?o=s(S):(r&A.WASI_FILESTAT_SET_ATIM_NOW)===A.WASI_FILESTAT_SET_ATIM_NOW&&(o=W),(r&A.WASI_FILESTAT_SET_MTIM)===A.WASI_FILESTAT_SET_MTIM?l=s(i):(r&A.WASI_FILESTAT_SET_MTIM_NOW)===A.WASI_FILESTAT_SET_MTIM_NOW&&(l=W);const c=E.default.from(this.memory.buffer,_,e).toString();return a.utimesSync(h.resolve(n.path,c),new Date(o),new Date(l)),A.WASI_ESUCCESS}),path_link:o((t,I,_,e,S,i,r)=>{const n=O(t,A.WASI_RIGHT_PATH_LINK_SOURCE),T=O(S,A.WASI_RIGHT_PATH_LINK_TARGET);if(!n.path||!T.path)return A.WASI_EINVAL;this.refreshMemory();const s=E.default.from(this.memory.buffer,_,e).toString(),o=E.default.from(this.memory.buffer,i,r).toString();return a.linkSync(h.resolve(n.path,s),h.resolve(T.path,o)),A.WASI_ESUCCESS}),path_open:o((t,I,_,S,i,r,n,T,s)=>{const o=O(t,A.WASI_RIGHT_PATH_OPEN);r=e.BigIntPolyfill(r),n=e.BigIntPolyfill(n);const W=(r&(A.WASI_RIGHT_FD_READ|A.WASI_RIGHT_FD_READDIR))!==e.BigIntPolyfill(0),R=(r&(A.WASI_RIGHT_FD_DATASYNC|A.WASI_RIGHT_FD_WRITE|A.WASI_RIGHT_FD_ALLOCATE|A.WASI_RIGHT_FD_FILESTAT_SET_SIZE))!==e.BigIntPolyfill(0);let f;R&&W?f=a.constants.O_RDWR:W?f=a.constants.O_RDONLY:R&&(f=a.constants.O_WRONLY);let c=r|A.WASI_RIGHT_PATH_OPEN,N=r|n;0!==(i&A.WASI_O_CREAT)&&(f|=a.constants.O_CREAT,c|=A.WASI_RIGHT_PATH_CREATE_FILE),0!==(i&A.WASI_O_DIRECTORY)&&(f|=a.constants.O_DIRECTORY),0!==(i&A.WASI_O_EXCL)&&(f|=a.constants.O_EXCL),0!==(i&A.WASI_O_TRUNC)&&(f|=a.constants.O_TRUNC,c|=A.WASI_RIGHT_PATH_FILESTAT_SET_SIZE),0!==(T&A.WASI_FDFLAG_APPEND)&&(f|=a.constants.O_APPEND),0!==(T&A.WASI_FDFLAG_DSYNC)&&(a.constants.O_DSYNC?f|=a.constants.O_DSYNC:f|=a.constants.O_SYNC,N|=A.WASI_RIGHT_FD_DATASYNC),0!==(T&A.WASI_FDFLAG_NONBLOCK)&&(f|=a.constants.O_NONBLOCK),0!==(T&A.WASI_FDFLAG_RSYNC)&&(a.constants.O_RSYNC?f|=a.constants.O_RSYNC:f|=a.constants.O_SYNC,N|=A.WASI_RIGHT_FD_SYNC),0!==(T&A.WASI_FDFLAG_SYNC)&&(f|=a.constants.O_SYNC,N|=A.WASI_RIGHT_FD_SYNC),R&&0===(f&(a.constants.O_APPEND|a.constants.O_TRUNC))&&(N|=A.WASI_RIGHT_FD_SEEK),this.refreshMemory();const C=E.default.from(this.memory.buffer,_,S).toString(),L=h.resolve(o.path,C);if(h.relative(o.path,L).startsWith(".."))return A.WASI_ENOTCAPABLE;let G,D,P;try{if(G=a.realpathSync(L),h.relative(o.path,G).startsWith(".."))return A.WASI_ENOTCAPABLE}catch(u){if("ENOENT"!==u.code)throw u;G=L}try{D=a.statSync(G).isDirectory()}catch(u){}P=!R&&D?a.openSync(G,a.constants.O_RDONLY):a.openSync(G,f);const g=[...this.FD_MAP.keys()].reverse()[0]+1;return this.FD_MAP.set(g,{real:P,filetype:void 0,rights:{base:c,inheriting:N},path:G}),l(this,g),this.view.setUint32(s,g,!0),A.WASI_ESUCCESS}),path_readlink:o((t,I,_,e,S,i)=>{const r=O(t,A.WASI_RIGHT_PATH_READLINK);if(!r.path)return A.WASI_EINVAL;this.refreshMemory();const n=E.default.from(this.memory.buffer,I,_).toString(),T=h.resolve(r.path,n),s=a.readlinkSync(T),o=E.default.from(this.memory.buffer).write(s,e,S);return this.view.setUint32(i,o,!0),A.WASI_ESUCCESS}),path_remove_directory:o((t,I,_)=>{const e=O(t,A.WASI_RIGHT_PATH_REMOVE_DIRECTORY);if(!e.path)return A.WASI_EINVAL;this.refreshMemory();const S=E.default.from(this.memory.buffer,I,_).toString();return a.rmdirSync(h.resolve(e.path,S)),A.WASI_ESUCCESS}),path_rename:o((t,I,_,e,S,i)=>{const r=O(t,A.WASI_RIGHT_PATH_RENAME_SOURCE),n=O(e,A.WASI_RIGHT_PATH_RENAME_TARGET);if(!r.path||!n.path)return A.WASI_EINVAL;this.refreshMemory();const T=E.default.from(this.memory.buffer,I,_).toString(),s=E.default.from(this.memory.buffer,S,i).toString();return a.renameSync(h.resolve(r.path,T),h.resolve(n.path,s)),A.WASI_ESUCCESS}),path_symlink:o((t,I,_,e,S)=>{const i=O(_,A.WASI_RIGHT_PATH_SYMLINK);if(!i.path)return A.WASI_EINVAL;this.refreshMemory();const r=E.default.from(this.memory.buffer,t,I).toString(),n=E.default.from(this.memory.buffer,e,S).toString();return a.symlinkSync(r,h.resolve(i.path,n)),A.WASI_ESUCCESS}),path_unlink_file:o((t,I,_)=>{const e=O(t,A.WASI_RIGHT_PATH_UNLINK_FILE);if(!e.path)return A.WASI_EINVAL;this.refreshMemory();const S=E.default.from(this.memory.buffer,I,_).toString();return a.unlinkSync(h.resolve(e.path,S)),A.WASI_ESUCCESS}),poll_oneoff:(t,I,_,S)=>{let E=0,i=0;this.refreshMemory();for(let r=0;r<_;r+=1){const _=this.view.getBigUint64(t,!0);t+=8;const S=this.view.getUint8(t);switch(t+=1,S){case A.WASI_EVENTTYPE_CLOCK:{t+=7;this.view.getBigUint64(t,!0);t+=8;const S=this.view.getUint32(t,!0);t+=4,t+=4;const r=this.view.getBigUint64(t,!0);t+=8;this.view.getBigUint64(t,!0);t+=8;const n=this.view.getUint16(t,!0);t+=2,t+=6;const T=1===n;let s=A.WASI_ESUCCESS;const o=e.BigIntPolyfill(C(S));if(null===o)s=A.WASI_EINVAL;else{const t=T?r:o+r;i=t>i?t:i}this.view.setBigUint64(I,_,!0),I+=8,this.view.setUint16(I,s,!0),I+=2,this.view.setUint8(I,A.WASI_EVENTTYPE_CLOCK),I+=1,I+=5,E+=1;break}case A.WASI_EVENTTYPE_FD_READ:case A.WASI_EVENTTYPE_FD_WRITE:t+=3;this.view.getUint32(t,!0);t+=4,this.view.setBigUint64(I,_,!0),I+=8,this.view.setUint16(I,A.WASI_ENOSYS,!0),I+=2,this.view.setUint8(I,S),I+=1,I+=5,E+=1;break;default:return A.WASI_EINVAL}}for(this.view.setUint32(S,E,!0);f.hrtime()<i;);return A.WASI_ESUCCESS},proc_exit:t=>(f.exit(t),A.WASI_ESUCCESS),proc_raise:t=>t in A.SIGNAL_MAP?(f.kill(A.SIGNAL_MAP[t]),A.WASI_ESUCCESS):A.WASI_EINVAL,random_get:(t,I)=>(this.refreshMemory(),f.randomFillSync(new Uint8Array(this.memory.buffer),t,I),A.WASI_ESUCCESS),sched_yield:()=>A.WASI_ESUCCESS,sock_recv:()=>A.WASI_ENOSYS,sock_send:()=>A.WASI_ENOSYS,sock_shutdown:()=>A.WASI_ENOSYS},t.traceSyscalls&&Object.keys(this.wasiImport).forEach(t=>{const I=this.wasiImport[t];this.wasiImport[t]=function(..._){console.log(`WASI: wasiImport called: ${t} (${_})`);try{let t=I(..._);return console.log("WASI:  => "+t),t}catch(e){throw console.log("Catched error: "+e),e}}})}refreshMemory(){this.view&&0!==this.view.buffer.byteLength||(this.view=new S.DataViewPolyfill(this.memory.buffer))}setMemory(t){this.memory=t}start(t){const I=t.exports;if(null===I||"object"!==typeof I)throw new Error(`instance.exports must be an Object. Received ${I}.`);const{memory:_}=I;if(!(_ instanceof WebAssembly.Memory))throw new Error(`instance.exports.memory must be a WebAssembly.Memory. Recceived ${_}.`);this.setMemory(_),I._start&&I._start()}getImportNamespace(t){let I=null;for(let _ of WebAssembly.Module.imports(t))if("function"===_.kind&&_.module.startsWith("wasi_"))if(I){if(I!==_.module)throw new Error("Multiple namespaces detected.")}else I=_.module;return I}getImports(t){switch(this.getImportNamespace(t)){case"wasi_unstable":return{wasi_unstable:this.wasiImport};case"wasi_snapshot_preview1":return{wasi_snapshot_preview1:this.wasiImport};default:throw new Error("Can't detect a WASI namespace for the WebAssembly Module")}}}I.default=h,h.defaultBindings=undefined,I.WASI=h},jg5z:function(t,I,_){"use strict";Object.defineProperty(I,"__esModule",{value:!0});const e=_("98P5");let S=DataView;S.prototype.setBigUint64||(S.prototype.setBigUint64=function(t,I,_){let e,S;if(I<2**32)e=Number(I),S=0;else{for(var E=I.toString(2),A="",i=0;i<64-E.length;i++)A+="0";A+=E,S=parseInt(A.substring(0,32),2),e=parseInt(A.substring(32),2)}this.setUint32(t+(_?0:4),e,_),this.setUint32(t+(_?4:0),S,_)},S.prototype.getBigUint64=function(t,I){let _=this.getUint32(t+(I?0:4),I),S=this.getUint32(t+(I?4:0),I);for(var E=_.toString(2),A=S.toString(2),i="",r=0;r<32-E.length;r++)i+="0";return i+=E,e.BigIntPolyfill("0b"+A+i)}),I.DataViewPolyfill=S}}]);