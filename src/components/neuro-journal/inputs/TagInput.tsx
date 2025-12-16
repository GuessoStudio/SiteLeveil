import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface TagInputProps {
    label: string;
    subLabel?: string;
    selectedTags: string[];
    onChange: (tags: string[]) => void;
    predefinedTags: string[];
    placeholder?: string;
}

const TagInput = ({
    label,
    subLabel,
    selectedTags,
    onChange,
    predefinedTags,
    placeholder = "Ajouter un autre..."
}: TagInputProps) => {
    const [customInputValue, setCustomInputValue] = useState("");
    const [isAdding, setIsAdding] = useState(false);

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            onChange(selectedTags.filter(t => t !== tag));
        } else {
            onChange([...selectedTags, tag]);
        }
    };

    const handleAddCustom = (e: React.FormEvent) => {
        e.preventDefault();
        const val = customInputValue.trim();
        if (val && !selectedTags.includes(val)) {
            onChange([...selectedTags, val]);
            setCustomInputValue("");
            setIsAdding(false);
        }
    };

    return (
        <div className="space-y-4 animate-fadeIn">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{label}</h3>
                {subLabel && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subLabel}</p>}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
                {predefinedTags.map(tag => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 border ${isSelected
                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                                    : 'bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-600 dark:text-gray-300 hover:border-indigo-300'
                                }`}
                        >
                            {tag}
                        </button>
                    );
                })}

                {/* Custom Tags Display */}
                {selectedTags.filter(t => !predefinedTags.includes(t)).map(tag => (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 flex items-center gap-1 group"
                    >
                        {tag}
                        <X className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                    </button>
                ))}

                {/* Add Button */}
                {!isAdding ? (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="px-4 py-2 rounded-full text-sm font-medium border border-dashed border-gray-300 text-gray-500 hover:border-indigo-400 hover:text-indigo-500 transition-colors flex items-center gap-1"
                    >
                        <Plus className="w-4 h-4" /> Autre
                    </button>
                ) : (
                    <form onSubmit={handleAddCustom} className="flex items-center gap-2">
                        <input
                            type="text"
                            autoFocus
                            value={customInputValue}
                            onChange={(e) => setCustomInputValue(e.target.value)}
                            onBlur={() => {
                                if (!customInputValue) setIsAdding(false);
                            }}
                            placeholder={placeholder}
                            className="bg-transparent border-b-2 border-indigo-500 focus:outline-none text-sm py-1 px-2 text-gray-800 dark:text-white w-32"
                        />
                        <button
                            type="submit"
                            disabled={!customInputValue.trim()}
                            className="text-indigo-600 hover:text-indigo-700 disabled:opacity-50"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default TagInput;
