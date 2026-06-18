import { useState } from 'react';

function TwoFaField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const borderColor = focused ? 'var(--cp-brand-primary)' : hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';
  return (
    <div
      className="bg-white relative rounded-[5px] shrink-0 w-full cursor-text"
      style={{ border: `1px solid ${borderColor}`, transition: 'border-color 0.1s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-start justify-between p-[10px] relative" style={{ minHeight: 83 }}>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
          CONFIRMATION CODE
        </p>
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoFocus
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 mt-[10px]"
          style={{ letterSpacing: '-0.6px', caretColor: 'var(--cp-brand-primary)' }}
        />
      </div>
    </div>
  );
}

type TwoFaModalProps = {
  onCancel: () => void;
  onSubmit: () => void;
  onDismiss: () => void;
};

export function TwoFaModal({ onCancel, onSubmit, onDismiss }: TwoFaModalProps) {
  const [code, setCode] = useState('');
  const canSubmit = code.replace(/\D/g, '').length >= 2;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={onDismiss}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
        {/* Dismiss */}
        <button
          className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer"
          onClick={onDismiss}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        <div className="bg-white flex flex-col items-start p-[20px] rounded-[10px] w-full gap-[20px]">
          {/* Title */}
          <div className="flex flex-col gap-[20px] items-start w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap leading-none">
              CONFIRMATION
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.4]">
              Please enter your authenticator app 2FA code.
            </p>
          </div>

          {/* Code input */}
          <TwoFaField value={code} onChange={setCode} />

          {/* Buttons */}
          <div className="flex gap-[10px] items-center w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onCancel}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
            </button>
            <button
              disabled={!canSubmit}
              className={`flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${canSubmit ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer' : 'bg-[var(--cp-bg-2)] cursor-not-allowed'}`}
              onClick={() => { if (canSubmit) onSubmit(); }}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center whitespace-nowrap ${canSubmit ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
