import React from 'react';
import { Button } from 'antd';
// import QRCode from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { useApproval } from 'ui/utils';
import AccountCard from './AccountCard';
import { QrScan } from 'ui/assets';

const WatchAddressWaiting = ({
  params: { address },
  // currently doesn't support
  requestDefer,
}: {
  params: { address: string };
  requestDefer: Promise<any>;
}) => {
  const [, , rejectApproval] = useApproval();
  const { t } = useTranslation();
  const handleCancel = () => {
    rejectApproval('user cancel');
  };

  return (
    <>
      <AccountCard />
      <div className="watch-operation">
        <img src={QrScan} className="mb-[27px]" />
        {/* <QRCode value={address} size={212} /> */}
        <h1 className="text-15 text-medium text-gray-title text-center mb-[40px] px-[40px]">
          {t('Cannot sign using a watch mode address at this moment')}
        </h1>
        <p className="text-13 text-medium text-gray-content text-center">
          {t('Sign via phone scanning coming soon')}
        </p>
        <footer>
          <div className="action-buttons flex justify-center">
            <Button
              type="primary"
              size="large"
              className="w-[172px]"
              onClick={handleCancel}
            >
              {t('Cancel')}
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WatchAddressWaiting;
