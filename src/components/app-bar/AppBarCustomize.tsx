import { AppBar, AppBarProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
    '&.MuiPaper-root': {
        backgroundColor: 'rgba(0, 102, 66, 0.5)',
        backdropFilter: 'blur(16px)',
    },
}));

const AppBarCustomize: FC<AppBarProps> = (props) => <StyledAppBar {...props} />;

export default AppBarCustomize;
