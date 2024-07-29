/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-06-05 14:27:44
 * @LastEditors: bruceluthor 761326283@qq.com
 * @LastEditTime: 2024-07-16 15:16:34
 * @FilePath: /yc_mj-master/assets/scripts/manager/HttpConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export module HttpConfig {
  export const Hall = "hall/index" //大厅首页数据
  export const RegisterByPhone = "user/registerByPhone" //手机号一键注册登陆
  export const SendCode = "sms/send" //发送短信
  export const LoginByPassword = "user/login" //密码登录
  export const ChangePassword = "user/modifyPassword" //修改密码
  export const LoginByCode = "user/loginByCode" //手机号验证码登陆
  export const LoginByPhoneToken = "user/oneKeyLogin" //手机号一键登陆(本地有账号和密码,直接登录)
  export const CheckUserAuth = "user/checkUserState" //是否实名
  export const DoUserAuth = "user/identifyVerify" //实名认证
  export const ChangeUserInfo = "userSet/changeInfo" //修改头像
  export const ChangeNickName = "userSet/changeNickname" //修改昵称
  export const HeadPicList = "obs/avatar/list" //头像列表
  export const MailList = "mail/mailList" //获取邮箱列表
  export const OpenMail = "mail/openMail" //邮件已读
  export const GetMailReward = "mail/openMail" //领取邮件奖励
  export const GetAllMailReward = "mail/drawMailAttachment" //领取所有邮件奖励
  export const GetHistoryMailReward = "mail/oneClickCollection" //领取历史邮件奖励
  export const ShopList = "mall/mallList" //商城列表
  export const ShopBuy = "mall/buy" //商城购买
  export const BagList = "bag/bagList" //背包列表
  export const SetGet = "setting/get" //获取用户偏好设置
  export const SetSave = "setting/save" //保存用户偏好设置
  export const RankRich = "rank/rich" //富豪榜
  export const RankMasterHand = "rank/high" //高手榜
  export const RankFamous = "rank/famous" //名人榜
  export const GameSelect = "game/select" //选择游戏
  export const QuickStart = "game/quickStart" //快速开始
  export const GameEnterCheck = "game/check" //进入游戏前检查
  export const BuyMonthCard = "monthCard/buy" //购买月卡
  export const MonthCardConfig = "monthCard/config" //月卡配置
  export const PrizeDrawDetail = "activity/prizeDrawDetail" //抽奖详情
  export const PrizeDraw = "activity/prizeDraw" //抽奖
  export const PrizeDrawRecord = "activity/prizeDrawRecord" //抽奖记录
  export const PrizeDrawRecordList = "activity/prizeDrawRecordList" //抽奖记录列表

  export const BenefitDetail = "activity/newbieBenefitDetail" //签到详情
  export const GetBenefit = "activity/getBenefit" //签到
  export const FirstChargeDetail = "activity/firstChargeGiftDetail" //首充详情
  export const FirstCharge = "activity/firstChargeGiftBuy" //首充
  export const PayOrderStatus = "bill/payOrderStatus" //支付订单状态
  export const Prepayment = "bill/prepayment"
  export const CreateRoom = "self/room/create"
  export const GetRoomInfo = "self/room/roomInfo"
  export const GetRoomId = "self/room/roomId"
  export const JoinRoom = "self/room/joinRoom"
  export const ExitRoom = "self/room/exit"
  export const DissolveRoom = "self/room/dissolve"
  export const UpdateRoomRule = "self/room/updateRule"
  export const ActiveGameInfo = "game/activeGameInfo"
  export const RoomReady = "self/room/selfRoomReady"
  export const Upload = "obs/upload"
}
