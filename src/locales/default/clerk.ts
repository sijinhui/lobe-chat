export default {
  backButton: '返回',
  badge__default: '默认',
  badge__otherImpersonatorDevice: '其他模拟器设备',
  badge__primary: '主要',
  badge__requiresAction: '需要采取行动',
  badge__thisDevice: '此设备',
  badge__unverified: '未验证',
  badge__userDevice: '用户设备',
  badge__you: '您',
  createOrganization: {
    formButtonSubmit: '创建组织',
    invitePage: {
      formButtonReset: '跳过',
    },
    title: '创建组织',
  },
  dates: {
    lastDay: "昨天 {{ date | timeString('zh-CN') }}",
    next6Days: "{{ date | weekday('zh-CN','long') }} {{ date | timeString('zh-CN') }}",
    nextDay: "明天 {{ date | timeString('zh-CN') }}",
    numeric: "{{ date | numeric('zh-CN') }}",
    previous6Days: "上周{{ date | weekday('zh-CN','long') }} {{ date | timeString('zh-CN') }}",
    sameDay: "今天 {{ date | timeString('zh-CN') }}",
  },
  dividerText: '或者',
  footerActionLink__useAnotherMethod: '使用另一种方法',
  footerPageLink__help: '帮助',
  footerPageLink__privacy: '隐私',
  footerPageLink__terms: '条款',
  formButtonPrimary: '继续',
  formButtonPrimary__verify: '验证',
  formFieldAction__forgotPassword: '忘记密码？',
  formFieldError__matchingPasswords: '密码匹配。',
  formFieldError__notMatchingPasswords: '密码不匹配。',
  formFieldError__verificationLinkExpired: '验证链接已过期。请申请新的链接。',
  formFieldHintText__optional: '选填',
  formFieldHintText__slug: 'Slug 是一个人类可读的 ID，它必须是唯一的。它通常用于 URL 中。',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: '删除帐户',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__emailAddresses: '输入或粘贴一个或多个电子邮件地址，用空格或逗号分隔',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: 'my-org',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldLabel__automaticInvitations: '为此域名启用自动邀请',
  formFieldLabel__backupCode: '备用代码',
  formFieldLabel__confirmDeletion: '确认',
  formFieldLabel__confirmPassword: '确认密码',
  formFieldLabel__currentPassword: '当前密码',
  formFieldLabel__emailAddress: '电子邮件地址',
  formFieldLabel__emailAddress_username: '电子邮件地址或用户名',
  formFieldLabel__emailAddresses: '电子邮件地址',
  formFieldLabel__firstName: '名字',
  formFieldLabel__lastName: '姓氏',
  formFieldLabel__newPassword: '新密码',
  formFieldLabel__organizationDomain: '域名',
  formFieldLabel__organizationDomainDeletePending: '删除待处理的邀请和建议',
  formFieldLabel__organizationDomainEmailAddress: '验证邮箱地址',
  formFieldLabel__organizationDomainEmailAddressDescription:
    '输入此域名下的一个邮箱地址以接收验证码并验证此域名。',
  formFieldLabel__organizationName: '组织名称',
  formFieldLabel__organizationSlug: 'URL 简称',
  formFieldLabel__passkeyName: 'Passkey 名称',
  formFieldLabel__password: '密码',
  formFieldLabel__phoneNumber: '电话号码',
  formFieldLabel__role: '角色',
  formFieldLabel__signOutOfOtherSessions: '登出所有其他设备',
  formFieldLabel__username: '用户名',
  impersonationFab: {
    action__signOut: '退出登录',
    title: '以 {{identifier}} 的身份登录',
  },
  locale: 'zh-CN',
  maintenanceMode: '我们目前正在进行维护，但不用担心，不会超过几分钟。',
  membershipRole__admin: '管理员',
  membershipRole__basicMember: '成员',
  membershipRole__guestMember: '访客',
  organizationList: {
    action__createOrganization: '创建组织',
    action__invitationAccept: '加入',
    action__suggestionsAccept: '请求加入',
    createOrganization: '创建组织',
    invitationAcceptedLabel: '已加入',
    subtitle: '以继续使用 {{applicationName}}',
    suggestionsAcceptedLabel: '等待批准',
    title: '选择一个帐户',
    titleWithoutPersonal: '选择一个组织',
  },
  organizationProfile: {
    badge__automaticInvitation: '自动邀请',
    badge__automaticSuggestion: '自动建议',
    badge__manualInvitation: '无自动注册',
    badge__unverified: '未验证',
    createDomainPage: {
      subtitle: '添加域名以进行验证。具有此域名电子邮件地址的用户可以自动加入组织或请求加入。',
      title: '添加域名',
    },
    invitePage: {
      detailsTitle__inviteFailed:
        '邀请未发送。以下电子邮件地址已有待处理的邀请：{{email_addresses}}。',
      formButtonPrimary__continue: '发送邀请',
      selectDropdown__role: '选择角色',
      subtitle: '输入或粘贴一个或多个电子邮件地址，用空格或逗号分隔。',
      successMessage: '邀请已成功发送',
      title: '邀请新成员',
    },
    membersPage: {
      action__invite: '邀请',
      activeMembersTab: {
        menuAction__remove: '移除成员',
        tableHeader__actions: '',
        tableHeader__joined: '加入时间',
        tableHeader__role: '角色',
        tableHeader__user: '用户',
      },
      detailsTitle__emptyRow: '没有可显示的成员',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            '通过连接电子邮件域邀请用户加入组织。任何使用匹配电子邮件域注册的用户都可以随时加入组织。',
          headerTitle: '自动邀请',
          primaryButton: '管理已验证域名',
        },
        table__emptyRow: '没有可显示的邀请',
      },
      invitedMembersTab: {
        menuAction__revoke: '撤销邀请',
        tableHeader__invited: '已邀请',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle: '使用匹配电子邮件域注册的用户可以看到请求加入组织的建议。',
          headerTitle: '自动建议',
          primaryButton: '管理已验证的域',
        },
        menuAction__approve: '批准',
        menuAction__reject: '拒绝',
        tableHeader__requested: '请求访问',
        table__emptyRow: '没有请求显示',
      },
      start: {
        headerTitle__invitations: '邀请',
        headerTitle__members: '成员',
        headerTitle__requests: '请求',
      },
    },
    navbar: {
      description: '管理您的组织',
      general: '常规',
      members: '成员',
      title: '组织',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: '在下方输入“{{organizationName}}”以继续。',
          messageLine1: '您确定要删除此组织吗？',
          messageLine2: '此操作是永久且不可逆转的。',
          successMessage: '您已删除组织',
          title: '删除组织',
        },
        leaveOrganization: {
          actionDescription: '在下方输入“{{organizationName}}”以继续。',
          messageLine1: '您确定要离开此组织吗？您将失去对该组织及其应用程序的访问权限。',
          messageLine2: '此操作是永久且不可逆转的。',
          successMessage: '您已离开组织',
          title: '离开组织',
        },
        title: '危险',
      },
      domainSection: {
        menuAction__manage: '管理',
        menuAction__remove: '删除',
        menuAction__verify: '验证',
        primaryButton: '添加域',
        subtitle: '允许用户根据已验证的电子邮件域自动加入组织或请求加入。',
        title: '已验证的域',
      },
      successMessage: '组织已更新',
      title: '更新配置文件',
    },
    removeDomainPage: {
      messageLine1: '电子邮件域 {{domain}} 将被移除。',
      messageLine2: '此后用户将无法自动加入组织。',
      successMessage: '{{domain}} 已移除',
      title: '移除域',
    },
    start: {
      headerTitle__general: '常规',
      headerTitle__members: '成员',
      profileSection: {
        primaryButton: '更新配置文件',
        title: '组织配置文件',
        uploadAction__title: '标识',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: '移除此域将影响已邀请的用户。',
        removeDomainActionLabel__remove: '移除域',
        removeDomainSubtitle: '从已验证的域中移除此域',
        removeDomainTitle: '移除域',
      },
      enrollmentTab: {
        automaticInvitationOption__description: '用户注册时将自动邀请加入组织，并随时可以加入。',
        automaticInvitationOption__label: '自动邀请',
        automaticSuggestionOption__description:
          '用户将收到请求加入的建议，但必须由管理员批准后才能加入组织。',
        automaticSuggestionOption__label: '自动建议',
        calloutInfoLabel: '更改注册模式仅影响新用户。',
        calloutInvitationCountLabel: '已发送给用户的待处理邀请：{{count}}',
        calloutSuggestionCountLabel: '已发送给用户的待处理建议：{{count}}',
        manualInvitationOption__description: '用户只能手动邀请加入组织。',
        manualInvitationOption__label: '不自动加入',
        subtitle: '选择来自此域的用户如何加入组织。',
      },
      start: {
        headerTitle__danger: '危险',
        headerTitle__enrollment: '注册选项',
      },
      subtitle: '域 {{domain}} 已验证。继续选择注册模式。',
      title: '更新 {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: '输入发送到您电子邮件地址的验证代码',
      formTitle: '验证代码',
      resendButton: '没有收到验证码？重新发送',
      subtitle: '需要通过电子邮件验证域 {{domainName}}。',
      subtitleVerificationCodeScreen: '已发送验证码至 {{emailAddress}}。输入验证码以继续。',
      title: '验证域',
    },
  },
  organizationSwitcher: {
    action__createOrganization: '创建组织',
    action__invitationAccept: '加入',
    action__manageOrganization: '管理',
    action__suggestionsAccept: '请求加入',
    notSelected: '未选择组织',
    personalWorkspace: '个人账户',
    suggestionsAcceptedLabel: '待批准',
  },
  paginationButton__next: '下一页',
  paginationButton__previous: '上一页',
  paginationRowText__displaying: '显示',
  paginationRowText__of: '共',
  signIn: {
    accountSwitcher: {
      action__addAccount: '添加账户',
      action__signOutAll: '退出所有账户',
      subtitle: '选择要继续使用的账户。',
      title: '选择一个账户',
    },
    alternativeMethods: {
      actionLink: '获取帮助',
      actionText: '没有这些？',
      blockButton__backupCode: '使用备用代码',
      blockButton__emailCode: '将验证码发送至 {{identifier}}',
      blockButton__emailLink: '将链接发送至 {{identifier}}',
      blockButton__passkey: '使用您的密钥登录',
      blockButton__password: '使用密码登录',
      blockButton__phoneCode: '将短信验证码发送至 {{identifier}}',
      blockButton__totp: '使用您的身份验证器应用程序',
      getHelp: {
        blockButton__emailSupport: '邮件支持',
        content:
          '如果您在登录您的帐户时遇到困难，请给我们发送电子邮件，我们将尽快与您合作恢复访问权限。',
        title: '获取帮助',
      },
      subtitle: '遇到问题？您可以使用以下任一方法登录。',
      title: '使用其他方法',
    },
    backupCodeMfa: {
      subtitle: '您的备用代码是在设置两步验证时获得的。',
      title: '输入备用代码',
    },
    emailCode: {
      formTitle: '验证码',
      resendButton: '没有收到验证码？重新发送',
      subtitle: '继续访问 {{applicationName}}',
      title: '查看您的电子邮件',
    },
    emailLink: {
      expired: {
        subtitle: '返回原始标签继续。',
        title: '此验证链接已过期',
      },
      failed: {
        subtitle: '返回原始标签继续。',
        title: '此验证链接无效',
      },
      formSubtitle: '使用发送到您电子邮件的验证链接',
      formTitle: '验证链接',
      loading: {
        subtitle: '您将很快被重定向',
        title: '登录中...',
      },
      resendButton: '没有收到链接？重新发送',
      subtitle: '继续访问 {{applicationName}}',
      title: '查看您的电子邮件',
      unusedTab: {
        title: '您可以关闭此标签',
      },
      verified: {
        subtitle: '您将很快被重定向',
        title: '成功登录',
      },
      verifiedSwitchTab: {
        subtitle: '返回原始标签继续',
        subtitleNewTab: '返回新打开的标签继续',
        titleNewTab: '在其他标签上登录',
      },
    },
    forgotPassword: {
      formTitle: '重置密码代码',
      resendButton: '没有收到验证码？重新发送',
      subtitle: '重置您的密码',
      subtitle_email: '首先，输入发送到您电子邮件地址的代码',
      subtitle_phone: '首先，输入发送到您手机的代码',
      title: '重置密码',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: '重置您的密码',
      label__alternativeMethods: '或者，使用其他方法登录',
      title: '忘记密码？',
    },
    noAvailableMethods: {
      message: '无法继续登录。没有可用的身份验证因素。',
      subtitle: '发生错误',
      title: '无法登录',
    },
    passkey: {
      subtitle: '使用您的密钥确认是您本人。您的设备可能会要求您的指纹、面容或屏幕锁。',
      title: '使用您的密钥',
    },
    password: {
      actionLink: '使用其他方法',
      subtitle: '输入与您的帐户关联的密码',
      title: '输入您的密码',
    },
    passwordPwned: {
      title: '密码已泄露',
    },
    phoneCode: {
      formTitle: '验证码',
      resendButton: '没有收到验证码？重新发送',
      subtitle: '继续访问 {{applicationName}}',
      title: '检查您的手机',
    },
    phoneCodeMfa: {
      formTitle: '验证码',
      resendButton: '没有收到验证码？重新发送',
      subtitle: '请继续，输入发送到您手机的验证码',
      title: '检查您的手机',
    },
    resetPassword: {
      formButtonPrimary: '重置密码',
      requiredMessage: '出于安全原因，需要重置您的密码。',
      successMessage: '您的密码已成功更改。正在登录，请稍候。',
      title: '设置新密码',
    },
    resetPasswordMfa: {
      detailsLabel: '在重置密码之前，我们需要验证您的身份。',
    },
    start: {
      actionLink: '注册',
      actionLink__join_waitlist: '加入候补👍',
      actionLink__use_email: '使用电子邮件',
      actionLink__use_email_username: '使用电子邮件或用户名',
      actionLink__use_passkey: '改用密钥',
      actionLink__use_phone: '使用手机',
      actionLink__use_username: '使用用户名',
      actionText: '⚠️没有帐户？',
      actionText__join_waitlist: '⚠️没有帐户？',
      subtitle: '欢迎回来！请登录以继续',
      title: '登录到 {{applicationName}}',
    },
    totpMfa: {
      formTitle: '验证码',
      subtitle: '请继续，输入您的身份验证器应用程序生成的验证码',
      title: '双重验证',
    },
  },
  signInEnterPasswordTitle: '输入您的密码',
  signUp: {
    continue: {
      actionLink: '登录',
      actionText: '已有帐户？',
      subtitle: '请填写剩余的细节以继续。',
      title: '填写缺失的字段',
    },
    emailCode: {
      formSubtitle: '输入发送到您电子邮件地址的验证码',
      formTitle: '验证码',
      resendButton: '没有收到验证码？重新发送',
      subtitle: '输入发送到您电子邮件的验证码',
      title: '验证您的电子邮件',
    },
    emailLink: {
      formSubtitle: '使用发送到您电子邮件地址的验证链接',
      formTitle: '验证链接',
      loading: {
        title: '注册中...',
      },
      resendButton: '没有收到链接？重新发送',
      subtitle: '继续访问 {{applicationName}}',
      title: '验证您的电子邮件',
      verified: {
        title: '成功注册',
      },
      verifiedSwitchTab: {
        subtitle: '返回新打开的标签继续',
        subtitleNewTab: '返回上一个标签继续',
        title: '成功验证电子邮件',
      },
    },
    phoneCode: {
      formSubtitle: '输入发送到您电话号码的验证码',
      formTitle: '验证码',
      resendButton: '没有收到验证码？重新发送',
      subtitle: '输入发送到您手机的验证码',
      title: '验证您的手机',
    },
    start: {
      actionLink: '登录',
      actionText: '已有帐户？',
      subtitle: '欢迎！请填写详细信息开始。',
      title: '创建您的帐户',
    },
  },
  socialButtonsBlockButton: '继续使用 {{provider|titleize}}',
  unstable__errors: {
    captcha_invalid: '由于安全验证失败，注册失败。请刷新页面重试，或联系支持获取更多帮助。',
    captcha_unavailable: '由于机器人验证失败，注册失败。请刷新页面重试，或联系支持获取更多帮助。',
    form_code_incorrect: '',
    form_identifier_exists: '',
    form_identifier_exists__email_address: '此电子邮件地址已被使用。请尝试另一个。',
    form_identifier_exists__phone_number: '此电话号码已被使用。请尝试另一个。',
    form_identifier_exists__username: '此用户名已被使用。请尝试另一个。',
    form_identifier_not_found: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: '电子邮件地址必须是有效的电子邮件地址。',
    form_param_format_invalid__phone_number: '电话号码必须符合有效的国际格式。',
    form_param_max_length_exceeded__first_name: '名字不应超过256个字符。',
    form_param_max_length_exceeded__last_name: '姓氏不应超过256个字符。',
    form_param_max_length_exceeded__name: '名称不应超过256个字符。',
    form_param_nil: '',
    form_password_incorrect: '',
    form_password_length_too_short: '',
    form_password_not_strong_enough: '您的密码不够强大。',
    form_password_pwned: '此密码已经被发现为泄露的一部分，不能使用，请尝试其他密码。',
    form_password_pwned__sign_in: '此密码已经被发现为泄露的一部分，不能使用，请重置您的密码。',
    form_password_size_in_bytes_exceeded:
      '您的密码已超过允许的最大字节数，请缩短或删除一些特殊字符。',
    form_password_validation_failed: '密码不正确',
    form_username_invalid_character: '',
    form_username_invalid_length: '',
    identification_deletion_failed: '您不能删除您的最后一个身份验证。',
    not_allowed_access: '',
    passkey_already_exists: '此设备已注册过通行密钥。',
    passkey_not_supported: '此设备不支持通行密钥。',
    passkey_pa_not_supported: '注册需要平台验证器，但设备不支持。',
    passkey_registration_cancelled: '通行密钥注册已取消或超时。',
    passkey_retrieval_cancelled: '通行密钥验证已取消或超时。',
    passwordComplexity: {
      maximumLength: '少于{{length}}个字符',
      minimumLength: '{{length}}个或更多字符',
      requireLowercase: '一个小写字母',
      requireNumbers: '一个数字',
      requireSpecialCharacter: '一个特殊字符',
      requireUppercase: '一个大写字母',
      sentencePrefix: '您的密码必须包含',
    },
    phone_number_exists: '此电话号码已被使用。请尝试另一个。',
    zxcvbn: {
      couldBeStronger: '您的密码可以更强大。尝试添加更多字符。',
      goodPassword: '您的密码符合所有必要要求。',
      notEnough: '您的密码不够强大。',
      suggestions: {
        allUppercase: '将一些字母大写，但不是全部。',
        anotherWord: '添加更少见的单词。',
        associatedYears: '避免与您相关的年份。',
        capitalization: '大写不止第一个字母。',
        dates: '避免与您相关的日期和年份。',
        l33t: "避免可预测的字母替换，如将'@'替换为'a'。",
        longerKeyboardPattern: '使用更长的键盘模式，多次改变输入方向。',
        noNeed: '您可以创建强大的密码，而无需使用符号、数字或大写字母。',
        pwned: '如果您在其他地方使用此密码，应该更改它。',
        recentYears: '避免最近的年份。',
        repeated: '避免重复的单词和字符。',
        reverseWords: '避免常见单词的反向拼写。',
        sequences: '避免常见的字符序列。',
        useWords: '使用多个单词，但避免常见短语。',
      },
      warnings: {
        common: '这是一个常用的密码。',
        commonNames: '常见的名字和姓氏容易被猜到。',
        dates: '日期容易被猜到。',
        extendedRepeat: '重复的字符模式如“abcabcabc”容易被猜到。',
        keyPattern: '简短的键盘模式容易被猜到。',
        namesByThemselves: '单个名字或姓氏容易被猜到。',
        pwned: '您的密码在互联网上的数据泄露中曝光。',
        recentYears: '最近的年份容易被猜到。',
        sequences: '常见的字符序列如“abc”容易被猜到。',
        similarToCommon: '这与常用密码相似。',
        simpleRepeat: '重复的字符如“aaa”容易被猜到。',
        straightRow: '键盘上直线排列的键易被猜到。',
        topHundred: '这是一个常用密码。',
        topTen: '这是一个广泛使用的密码。',
        userInputs: '密码中不应包含任何个人或页面相关数据。',
        wordByItself: '单个单词容易被猜到。',
      },
    },
  },
  userButton: {
    action__addAccount: '添加账户',
    action__manageAccount: '管理账户',
    action__signOut: '登出',
    action__signOutAll: '从所有账户登出',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: '已复制！',
      actionLabel__copy: '复制全部',
      actionLabel__download: '下载 .txt',
      actionLabel__print: '打印',
      infoText1: '此帐户将启用备份代码。',
      infoText2: '保持备份代码的机密性并安全存储。如果怀疑备份代码已泄露，可以重新生成备份代码。',
      subtitle__codelist: '安全存储并保密备份代码。',
      successMessage:
        '备份代码现已启用。如果您无法访问您的身份验证设备，可以使用其中之一登录您的帐户。每个代码只能使用一次。',
      successSubtitle: '如果您无法访问您的身份验证设备，您可以使用其中之一登录您的帐户。',
      title: '添加备份代码验证',
      title__codelist: '备份代码',
    },
    connectedAccountPage: {
      formHint: '选择要连接您的帐户的提供商。',
      formHint__noAccounts: '没有可用的外部帐户提供商。',
      removeResource: {
        messageLine1: '{{identifier}} 将从此帐户中删除。',
        messageLine2: '您将无法再使用此连接的帐户，并且任何依赖功能将不再起作用。',
        successMessage: '{{connectedAccount}} 已从您的帐户中删除。',
        title: '删除连接的帐户',
      },
      socialButtonsBlockButton: '{{provider|titleize}}',
      successMessage: '提供商已添加到您的帐户',
      title: '添加连接的帐户',
    },
    deletePage: {
      actionDescription: '在下方输入“删除帐户”以继续。',
      confirm: '删除帐户',
      messageLine1: '您确定要删除您的帐户吗？',
      messageLine2: '此操作是永久且不可逆转的。',
      title: '删除帐户',
    },
    emailAddressPage: {
      emailCode: {
        formHint: '将发送包含验证码的电子邮件至此电子邮件地址。',
        formSubtitle: '输入发送至 {{identifier}} 的验证码。',
        formTitle: '验证码',
        resendButton: '没有收到验证码？重新发送',
        successMessage: '电子邮件 {{identifier}} 已添加到您的帐户。',
      },
      emailLink: {
        formHint: '将发送包含验证链接的电子邮件至此电子邮件地址。',
        formSubtitle: '点击发送至 {{identifier}} 的电子邮件中的验证链接。',
        formTitle: '验证链接',
        resendButton: '没有收到链接？重新发送',
        successMessage: '电子邮件 {{identifier}} 已添加到您的帐户。',
      },
      removeResource: {
        messageLine1: '{{identifier}} 将从此帐户中删除。',
        messageLine2: '您将无法再使用此电子邮件地址登录。',
        successMessage: '{{emailAddress}} 已从您的帐户中删除。',
        title: '删除电子邮件地址',
      },
      title: '添加电子邮件地址',
      verifyTitle: '验证电子邮件地址',
    },
    formButtonPrimary__add: '添加',
    formButtonPrimary__continue: '继续',
    formButtonPrimary__finish: '完成',
    formButtonPrimary__remove: '删除',
    formButtonPrimary__save: '保存',
    formButtonReset: '取消',
    mfaPage: {
      formHint: '选择要添加的方法。',
      title: '添加双重验证',
    },
    mfaPhoneCodePage: {
      backButton: '使用现有号码',
      primaryButton__addPhoneNumber: '添加电话号码',
      removeResource: {
        messageLine1: '{{identifier}} 在登录时将不再接收验证代码。',
        messageLine2: '您的帐户可能不够安全。您确定要继续吗？',
        successMessage: '{{mfaPhoneCode}} 的短信代码双重验证已移除。',
        title: '移除双重验证',
      },
      subtitle__availablePhoneNumbers: '选择现有电话号码注册短信代码双重验证，或添加新号码。',
      subtitle__unavailablePhoneNumbers:
        '没有可用的电话号码用于注册短信代码双重验证，请添加新号码。',
      successMessage1: '登录时，您需要输入发送至此电话号码的验证代码作为额外步骤。',
      successMessage2:
        '保存这些备份代码并将其安全存储。如果无法访问您的身份验证设备，可以使用备份代码登录。',
      successTitle: '短信代码验证已启用',
      title: '添加短信代码验证',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: '扫描 QR 码',
        buttonUnableToScan__nonPrimary: '无法扫描 QR 码？',
        infoText__ableToScan:
          '在您的身份验证器应用中设置新的登录方法，并扫描以下 QR 码将其链接到您的帐户。',
        infoText__unableToScan: '在您的身份验证器中设置新的登录方法，并输入下面提供的密钥。',
        inputLabel__unableToScan1: '确保已启用基于时间或一次性密码，然后完成链接您的帐户。',
        inputLabel__unableToScan2:
          '或者，如果您的身份验证器支持 TOTP URI，您也可以复制完整的 URI。',
      },
      removeResource: {
        messageLine1: '登录时将不再需要此身份验证器的验证代码。',
        messageLine2: '您的帐户可能不够安全。您确定要继续吗？',
        successMessage: '通过身份验证器应用的双重验证已移除。',
        title: '移除双重验证',
      },
      successMessage:
        '双重验证现已启用。登录时，您将需要输入此身份验证器生成的验证代码作为额外步骤。',
      title: '添加身份验证器应用',
      verifySubtitle: '输入您的身份验证器生成的验证代码',
      verifyTitle: '验证代码',
    },
    mobileButton__menu: '菜单',
    navbar: {
      account: '个人资料',
      description: '管理您的帐户信息',
      security: '安全',
      title: '帐户',
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: '{{name}} 将从此帐户中删除。',
        title: '删除密码',
      },
      subtitle__rename: '您可以更改密码名称以便更容易找到。',
      title__rename: '重命名密码',
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions: '建议注销所有可能使用旧密码的其他设备。',
      readonly: '您当前无法编辑密码，因为只能通过企业连接登录。',
      successMessage__set: '您的密码已设置。',
      successMessage__signOutOfOtherSessions: '所有其他设备已注销。',
      successMessage__update: '您的密码已更新。',
      title__set: '设置密码',
      title__update: '更新密码',
    },
    phoneNumberPage: {
      infoText: '将向此电话号码发送包含验证码的短信。可能会收取短信和数据费用。',
      removeResource: {
        messageLine1: '{{identifier}} 将从此帐户中删除。',
        messageLine2: '您将无法再使用此电话号码登录。',
        successMessage: '{{phoneNumber}} 已从您的帐户中删除。',
        title: '删除电话号码',
      },
      successMessage: '{{identifier}} 已添加到您的帐户。',
      title: '添加电话号码',
      verifySubtitle: '输入发送至 {{identifier}} 的验证码',
      verifyTitle: '验证电话号码',
    },
    profilePage: {
      fileDropAreaHint: '推荐尺寸 1:1，最多 10MB。',
      imageFormDestructiveActionSubtitle: '移除',
      imageFormSubtitle: '上传',
      imageFormTitle: '个人资料图片',
      readonly: '您的个人资料信息由企业连接提供，无法编辑。',
      successMessage: '您的个人资料已更新。',
      title: '更新个人资料',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: '注销设备',
        title: '活动设备',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: '重试',
        actionLabel__reauthorize: '立即授权',
        destructiveActionTitle: '删除',
        primaryButton: '连接帐户',
        subtitle__reauthorize:
          '所需的范围已更新，您可能体验到功能受限。请重新授权此应用以避免任何问题。',
        title: '连接的帐户',
      },
      dangerSection: {
        deleteAccountButton: '删除帐户',
        title: '删除帐户',
      },
      emailAddressesSection: {
        destructiveAction: '删除电子邮件',
        detailsAction__nonPrimary: '设为主要',
        detailsAction__primary: '完成验证',
        detailsAction__unverified: '验证',
        primaryButton: '添加电子邮件地址',
        title: '电子邮件地址',
      },
      enterpriseAccountsSection: {
        title: '企业帐户',
      },
      headerTitle__account: '个人资料详情',
      headerTitle__security: '安全',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: '重新生成',
          headerTitle: '备份代码',
          subtitle__regenerate: '获取一组新的安全备份代码。之前的备份代码将被删除且无法使用。',
          title__regenerate: '重新生成备份代码',
        },
        phoneCode: {
          actionLabel__setDefault: '设为默认',
          destructiveActionLabel: '删除',
        },
        primaryButton: '添加双重验证',
        title: '双重验证',
        totp: {
          destructiveActionTitle: '删除',
          headerTitle: '身份验证器应用',
        },
      },
      passkeysSection: {
        menuAction__destructive: '删除',
        menuAction__rename: '重命名',
        title: '密码',
      },
      passwordSection: {
        primaryButton__setPassword: '设置密码',
        primaryButton__updatePassword: '更新密码',
        title: '密码',
      },
      phoneNumbersSection: {
        destructiveAction: '删除电话号码',
        detailsAction__nonPrimary: '设为主要',
        detailsAction__primary: '完成验证',
        detailsAction__unverified: '验证电话号码',
        primaryButton: '添加电话号码',
        title: '电话号码',
      },
      profileSection: {
        primaryButton: '更新个人资料',
        title: '个人资料',
      },
      usernameSection: {
        primaryButton__setUsername: '设置用户名',
        primaryButton__updateUsername: '更新用户名',
        title: '用户名',
      },
      web3WalletsSection: {
        destructiveAction: '删除钱包',
        primaryButton: 'Web3 钱包',
        title: 'Web3 钱包',
      },
    },
    usernamePage: {
      successMessage: '您的用户名已更新。',
      title__set: '设置用户名',
      title__update: '更新用户名',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} 将从此帐户中删除。',
        messageLine2: '您将无法再使用此 Web3 钱包登录。',
        successMessage: '{{web3Wallet}} 已从您的帐户中删除。',
        title: '删除 Web3 钱包',
      },
      subtitle__availableWallets: '选择要连接到您的帐户的 Web3 钱包。',
      subtitle__unavailableWallets: '没有可用的 Web3 钱包。',
      successMessage: '钱包已添加到您的帐户。',
      title: '添加 Web3 钱包',
    },
  },
  waitlist: {
    start: {
      actionLink: '登录',
      actionText: '已有账户？',
      formButton: '申请加入',
      subtitle: '输入您的邮箱地址，等待或联系管理员处理后即可登录',
      title: '申请 加入候补',
    },
  },
};
